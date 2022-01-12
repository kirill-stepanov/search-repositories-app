const initialState = {
  repositories: [],
  repositoriesLoading: false,

  favouriteRepositories: []
};

const homePage = (state = initialState, action) => {
  switch (action.type) {
    case "HOME_GET_REPOSITORIES_REQUEST":
        return {
          ...state,
          repositoriesLoading: true,
        }
        
    case "HOME_GET_REPOSITORIES_SUCCESS":
      return {
        ...state,
        repositories: action.payload,
        repositoriesLoading: false
      }

    case "HOME_GET_REPOSITORIES_REQUEST":
      return {
        ...state,
        repositoriesLoading: false,
      }

    case "HOME_UPDATE_FAVOURIRE_REPOSITORIES":
      return {
        ...state,
        favouriteRepositories: action.payload,
      }

    default:
      return state;
  }
};

export default homePage;