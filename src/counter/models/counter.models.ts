export interface CounterModel {
  count: number;
}

export interface CounterStateModel {
  isPending: boolean;
  model: CounterModel;
}