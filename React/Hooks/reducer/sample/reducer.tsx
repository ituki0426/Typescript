type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum Types {
  Create = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
  Add = "ADD_PRODUCT",
  Rull="RULL_PRODUCT"
}

// Product

type ProductType = {
  id: number;
  name: string;
  price: number;
};

type ProductPayload = {
  [Types.Create]: {
    id: number;
    name: string;
    price: number;
  };
  [Types.Delete]: {
    id: number;
  };
};

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<
  ProductPayload
>];

export const productReducer = (
  state: ProductType[],
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price
        }
      ];
    case Types.Delete:
      return [...state.filter(product => product.id !== action.payload.id)];
    default:
      return state;
  }
};

// ShoppingCart

type ShoppingCartPayload = {
  [Types.Add]: undefined;
  [Types.Rull]:undefined;
};

export type ShoppingCartActions = ActionMap<
  ShoppingCartPayload
>[keyof ActionMap<ShoppingCartPayload>];

//dispacth()によって呼び出される関数。
//ほかのファイル等で、useRedcuer(shoppingCartReducer,初期値);が実行される。
export const shoppingCartReducer = (
  state: number,
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Add:
      return state + 1;
     case Types.Rull:
      return state-1;
    default:
      return state;
  }
};
