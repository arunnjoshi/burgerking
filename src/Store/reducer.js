import * as actionType from './action';

const initialState = {
	ingredients: {
		salad: 0,
		bacon: 0,
		meat: 0,
		cheese: 0,
	},
	totalPrice: 4,
};

const ingredientsPrice = {
	salad: 0.5,
	cheese: 1,
	meat: 1.5,
	bacon: 0.5,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.ADD_INGREDIENT:
			return {
				...state,
				ingredients: { ...state.ingredients, [action.ingredientName]: state.ingredients[action.ingredientName] + 1 },
				totalPrice: state.totalPrice + ingredientsPrice[action.ingredientName],
			};
		case actionType.REMOVE_INGREDIENT:
			return {
				...state,
				ingredients: { ...state.ingredients, [action.ingredientName]: state.ingredients[action.ingredientName] - 1 },
				totalPrice: state.totalPrice - ingredientsPrice[action.ingredientName],
			};
		default:
			return state;
	}
};

export default reducer;
