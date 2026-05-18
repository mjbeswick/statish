import type {
  ChartDefinition,
  SessionSnapshot,
  StatishEvent,
} from "@statish/model";

export class RuntimeSession<TContext = unknown> {
  readonly chart: ChartDefinition;

  snapshot: SessionSnapshot<TContext>;

  constructor(chart: ChartDefinition, context: TContext) {
    this.chart = chart;

    this.snapshot = {
      sessionId: crypto.randomUUID(),
      chartId: chart.id,
      active: [chart.initial],
      context,
      updatedAt: new Date().toISOString(),
    };
  }

  send(event: StatishEvent): SessionSnapshot<TContext> {
    const current = this.snapshot.active[0];

    const state = this.chart.states.find((s) => s.path === current);

    const transition = state?.transitions?.find(
      (t) => t.event === event.type,
    );

    if (!transition) {
      return this.snapshot;
    }

    this.snapshot = {
      ...this.snapshot,
      active: [transition.target],
      updatedAt: new Date().toISOString(),
    };

    return this.snapshot;
  }
}
