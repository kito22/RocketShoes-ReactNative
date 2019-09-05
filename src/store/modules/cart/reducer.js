import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_TO_CART_SUCCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });

    case '@cart/REMOVE_FROM_CART':
      return produce(state, draft => {
        const draftIndex = draft.findIndex(p => p.id === action.id);
        if (draftIndex >= 0) {
          draft.splice(draftIndex, 1);
        }
      });

    case '@cart/UPDATE_PRODUCT_AMOUNT_SUCCESS':
      if (action.amount <= 0) {
        return state;
      }
      return produce(state, draft => {
        const draftIndex = draft.findIndex(p => p.id === action.id);
        draft[draftIndex].amount = action.amount;
      });

    default:
      return state;
  }
}
