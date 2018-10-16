const initialState = {
    count: 666
  }

export const reducer = (state = initialState, action) => {
  console.log('Reducer Running', action);
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {count: state.count + 1});
    case 'DECREMENT':
      return Object.assign({}, state, {count: state.count - 1});
      case 'RESET':
      return Object.assign({}, state, {count: state.count = 666});
    default:
      return state;
  }
}