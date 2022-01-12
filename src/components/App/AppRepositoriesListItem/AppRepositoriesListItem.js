import React, {
  useState,
  useEffect,
} from "react"

import HeartIcon from "../../../public/icons/heart-icon"

import {
  Container,
  ContainerImage,
  ContainerDescription,
  ContainerDescriptionName,
  ContainerDescriptionLanguage,
  ContainerDescriptionButton,
  FavouriteButton,
} from './AppRepositoriesListItem.styles'

const AppRepositoriesListItem = (props) => {
  const { repository } = props

  const [favourite, setFavourite] = useState()

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("Repositories List")) || []

    list.find((item) => item.id === repository.id)
    ? setFavourite(true)
    : setFavourite(false)
  }, [])

  const handleClick = (repository) => {
    setFavourite(!favourite)

    const allEntries = JSON.parse(localStorage.getItem("Repositories List")) || []

    allEntries.push(repository)

    const filteredRepositories = allEntries.filter((item) => item.id !== repository.id)

    localStorage.setItem("Repositories List", JSON.stringify(filteredRepositories))

    favourite
    ? localStorage.setItem("Repositories List", JSON.stringify(filteredRepositories))
    : localStorage.setItem("Repositories List", JSON.stringify(allEntries))
  }

  return (
    <Container>
      <ContainerImage
        src={repository.owner.avatar_url}
        alt='Repository owner avatar'
      />

      <ContainerDescription>
        <ContainerDescriptionName>{repository.name}</ContainerDescriptionName>

        <ContainerDescriptionLanguage>{`${repository.stargazers_count} stars`}</ContainerDescriptionLanguage>

        <ContainerDescriptionButton>View more</ContainerDescriptionButton>

        <FavouriteButton
          isActive={favourite}
          onClick={() => handleClick(repository)}
        >
          <HeartIcon />
        </FavouriteButton>
      </ContainerDescription>

    </Container>
  )
}

export default AppRepositoriesListItem