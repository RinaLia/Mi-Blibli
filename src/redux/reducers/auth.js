const initialState = {
  isLoading: false,
  successMsg: "",
  isError: false,

  errorMsg: "",
  token: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "LOGIN_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.message,
      };
    }
    case "LOGIN_FULFILLED": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        token: action.payload.data.token,
        successMsg: action.payload.data.message,
      };
    }
    case "REGISTER_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "REGISTER_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data.message,
      };
    }
    case "REGISTER_FULFILLED": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        successMsg: action.payload.data.message,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        isLoading: true,
        isEror: false,
        token: null,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default auth;
