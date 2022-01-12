import React from "react"

import AppRepositoriesListItem from "../AppRepositoriesListItem"

import { List } from "./AppRepositoriesList.styles"

const AppRepositoriesList = (props) => {
  const { repositories } = props

  return (
    <List>
      {
        repositories.map((repository) => (
          <AppRepositoriesListItem
            key={repository.id}
            repository={repository}
          />
        ))
      }
    </List>
  )
}

export default AppRepositoriesList