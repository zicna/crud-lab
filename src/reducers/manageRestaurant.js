import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(
  state = {
    restaurants: [],
    reviews: []
  },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = { text: action.text, id: cuidFn() };
      return {
        ...state,
        restaurants: [...state.restaurants, restaurant],
      };
    case 'DELETE_RESTAURANT':
      const indx = state.restaurants.findIndex(r => r.id === action.id)
      return{
        ...state,
        restaurants:[...state.restaurants.slice(0, indx),
        ...state.restaurants.slice(indx + 1)]
      }
    case 'ADD_REVIEW':
      // console.log(action)
      const review = {
        text: action.review.text,
        restaurantId: action.review.restaurantId,
        id: cuidFn()
      }
      return{
        ...state,
        reviews: [...state.reviews, review]
      }
    case 'DELETE_REVIEW':
      // console.log(state, action)
      const i = state.reviews.findIndex(r => r.id === action.id)
      return {
        ...state,
        reviews: [
          ...state.reviews.slice(0, i),
          ...state.reviews.slice(i + 1)
        ]
      }

    default:
      return state;
  }
}
