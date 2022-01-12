import React from "react"

import { useDispatch } from "react-redux"

import { useForm } from "react-hook-form";

import { getRepositories } from "../../../redux/actions/home-page"

import {
  Search,
  SearchInput,
  SearchButton,
  Error,
} from "./HomeSearchbar.styles"

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onSubmit" });

  const dispatch = useDispatch()

  const onSubmit = (data) => {
    const params = {
      repositoryName: data.searchBar,
      page: 1,
    }

    dispatch(getRepositories(params))
  }

  return (
    <>
      <Search onSubmit={handleSubmit(onSubmit)}>
        <SearchInput
          placeholder="Enter the name of the repository"
          {...register('searchBar', {
            required: true,
          })}
        />

        <SearchButton type={'submit'} value={'Search'} />
      </Search>

      {errors?.searchBar && <Error>This field is required</Error>}
    </>
  )
}

export default SearchBar