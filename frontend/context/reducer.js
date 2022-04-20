export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log(
    state.basket.findIndex((baskeItem) => baskeItem.id === action.item.id)
  );
  console.log(action.item.id);
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //! logic to add to baskets
      return {
        //* return the current state
        ...state,
        //* then update basket
        basket: [...state.basket, action.item],
      };
      break;

    case "Remove_FROM_BASKET":
      //! logic
      let newBasket = [...state.basket];
      //! compairing  the id filtered
      const index = state.basket.findIndex(
        (baskeItem) => baskeItem.id === action.item.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product id: ${action.id} as`);
      }

      return { ...state, newBasket };

    default:
      return state;
  }
}

export default reducer;
