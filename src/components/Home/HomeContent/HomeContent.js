import React from "react"

import { useSelector } from "react-redux"

import AppRepositoriesList from "../../App/AppRepositoriesList"

const HomeContent = () => {
  const repositories = useSelector((state) => state.homePage.repositories)
  const repositoriesLoading = useSelector((state) => state.homePage.repositoriesLoading)

  return (
    <div>
      {
        repositoriesLoading
        ? <div>Loading...</div>
        : repositories.length
        ? <AppRepositoriesList repositories={repositories} />
        : <div>No result</div>
      }
      
    </div>
  )
}

export default HomeContent