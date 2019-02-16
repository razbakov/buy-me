export interface Ingredient {
  store?: string;
  category?: string;
  title?: string;
  quantity?: number;
  unit?: string;
  done?: boolean;
  translation?: string;
  photo?: string;
}

export interface IngredientsState {
  collection: Ingredient[];
}

export interface RootState {
  loaded: boolean;
}
