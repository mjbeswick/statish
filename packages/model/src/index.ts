export type StatePath = `/${string}`;

export interface StatishEvent<TType extends string = string, TPayload = unknown> {
  type: TType;
  payload?: TPayload;
}

export interface TransitionDefinition {
  event: string;
  target: StatePath;
  guard?: string;
  actions?: string[];
}

export interface StateDefinition {
  path: StatePath;
  transitions?: TransitionDefinition[];
}

export interface ChartDefinition {
  id: string;
  initial: StatePath;
  states: StateDefinition[];
}

export interface SessionSnapshot<TContext = unknown> {
  sessionId: string;
  chartId: string;
  active: StatePath[];
  context: TContext;
  updatedAt: string;
}
