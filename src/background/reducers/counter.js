const initialState = 10;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    default:
      return state;
  }
};
