import styled from "styled-components"

export const Search = styled.form`
  display: flex;
`

export const SearchInput = styled.input`
  padding: 15px;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #E4E4E4;
  box-sizing: border-box;
  border-radius: 4px;
`

export const SearchButton = styled.input`
  background: #1A6AFF;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  margin-left: 15px;
  padding: 12px 50px;
  font-family: ProximaNova-Semibold;
  font-size: 16px;
  line-height: 26px;
  color: white;
  transition: all .2s ease-in-out;

  :hover{
    background: #094271;
  }
`

export const Error = styled.div`
  font-family: ProximaNova-Regular;
  font-size: 12px;
  line-height: 18px;
  color: rgb(193, 53, 21);
`