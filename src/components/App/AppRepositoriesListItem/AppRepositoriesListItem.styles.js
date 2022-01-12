import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
`

export const ContainerImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`

export const ContainerDescription = styled.div`
  padding: 5px 15px 15px;
`

export const ContainerDescriptionName = styled.div`
  font-family: ProximaNova-Medium;
  font-size: 16px;
  line-height: 26px;
  color: #222222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ContainerDescriptionLanguage = styled.div`
  font-family: ProximaNova-Regular;
  font-size: 16px;
  line-height: 26px;
  color: #484848;
`

export const ContainerDescriptionButton = styled.button`
  background: #1A6AFF;
  cursor: pointer;
  width: 100%;
  height: 100%;
  margin: 0px auto;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: none;
  padding: 12px 0;
  font-family: ProximaNova-Semibold;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: white;
  transition: all .2s ease-in-out;

  :hover{
    background: #094271;
  }
`

export const FavouriteButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 15px;
  right: 15px;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;

  :not(${(props) => !props.isActive}):hover {
    svg path {
      fill: #CD5C5C;
    }
  }

  ${(props) => props.isActive && `
    svg path {
      fill: #800000;
    }
  `};
`