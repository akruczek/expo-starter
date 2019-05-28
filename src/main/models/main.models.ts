export interface MainModel {
  hasAccess: boolean;
}

export interface MainStateModel {
  isPending: boolean;
  model: MainModel;
}