// import { ADD_ENTRY, ADD_GOAL, DELETE_ENTRY } from "../action/types";

// const initialState = {
//   entry: {},
//   goal: {
//     fat: 0,
//     carbs: 0,
//     protein: 0,
//     calories: 0
//   },
//   entries: [
//     {
//       id: "1",
//       name: "Potatoes",
//       carb: 10,
//       fat: 5,
//       protein: 6,
//       servings: 2,
//       calories: 200
//     },
//     {
//       id: 2,
//       name: "Chicken",
//       carb: 8,
//       fat: 0.7,
//       protein: 20,
//       servings: 2,
//       calories: 300
//     }
//   ]
// };

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case ADD_ENTRY:
//       return { ...state, entries: [action.payload, ...state.entries] };
//     case ADD_GOAL:
//       return {
//         ...state,
//         goal: action.payload
//       };
//     case DELETE_ENTRY:
//       return {
//         ...state,
//         entries: state.entries.filter(entry => entry.id !== action.payload)
//       };
//     default:
//       return state;
//   }
// }
