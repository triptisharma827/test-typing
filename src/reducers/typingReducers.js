const initialState = {
    typedKeys: '',
    nextKeys: '',
    totalKeysPressed: 0,
    accuracy: 0,
  };
  
  const typingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_TYPED_KEYS':
        return {
          ...state,
          typedKeys: action.payload,
        };
      case 'SET_NEXT_KEYS':
        return {
          ...state,
          nextKeys: action.payload,
        };
      case 'INCREMENT_TOTAL_KEYS_PRESSED':
        return {
          ...state,
          totalKeysPressed: state.totalKeysPressed + 1,
        };
      case 'UPDATE_ACCURACY':
        return {
          ...state,
          accuracy: (state.totalKeysPressed / (state.totalKeysPressed + 1)) * 100,
        };
      default:
        return state;
    }
  };
  
  export default typingReducer;
  