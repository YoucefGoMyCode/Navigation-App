import ActionName from './ActionName';

const INITIAL_STATE = {
  isSplash: true,
  isLogin: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionName.connecte:
      return {
        ...state,
        isLogin: true,
      };
    case ActionName.disconnect:
      return {
        ...state,
        isLogin: false,
      };

    case ActionName.finishSplash:
      return {
        ...state,
        isSplash: false,
      };

    default:
      return state;
  }
};
