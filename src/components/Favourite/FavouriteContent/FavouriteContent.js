import React from "react"

import AppRepositoriesList from "../../App/AppRepositoriesList"

const FavouriteContent = () => {
  const repositories = JSON.parse(localStorage.getItem("Repositories List"))

  return <AppRepositoriesList repositories={repositories} />
}

export default FavouriteContent