import axios from "axios"

function getRepositories(params) {
  return async (dispatch) => {
    dispatch({ type: 'HOME_GET_REPOSITORIES_REQUEST' })

    try {
      const repositories = await axios.get(`https://api.github.com/search/repositories?q=${params.repositoryName}&page=${params.page}&per_page=20`)

      // https://api.github.com/search/repositories?q=${params.repositoryName}{&page,per_page,sort,order}

      dispatch({ type: 'HOME_GET_REPOSITORIES_SUCCESS', payload: repositories.data.items })
    } catch (err) {
      dispatch({ type: 'HOME_GET_REPOSITORIES_FAILURE' })
    }
  }
}

function updateFavouriteRepositories(value) {
  return (dispatch) => {
    dispatch({ type: 'HOME_UPDATE_FAVOURIRE_REPOSITORIES', payload: value })
  }
}

export {
  getRepositories,
  updateFavouriteRepositories,
}
