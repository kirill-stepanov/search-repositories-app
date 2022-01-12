import React from "react"

import SearchBar from "../../components/Home/HomeSearchbar"
import HomeContent from "../../components/Home/HomeContent"
import HomeRepositoriesList from "../../components/Home/HomeContent"

import { Container } from "./HomePage.styles"

const HomePage = () => {

 return (
  <Container>
    <SearchBar />

    <HomeContent />
  </Container>
 )
}

export default HomePage