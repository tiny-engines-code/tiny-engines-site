import styled from "styled-components"

export const PostListWrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 140px;
  grid-gap: 20px;
  justify-items: normal;
  margin: 80px 400px;
`

export const PostCard = styled.nav`
  opacity: 1;
  text-decoration: none;
  font-size: 16px;
  color: lightgray;
  line-height: 2;
  background: linear-gradient(to bottom right, blue, palevioletred);
  border-radius: 10px;
  padding-top: 20px;
  &:hover {
    background: darkgray;
  }

`

export const PostRow = styled.nav`
  grid-column-start: 1;
//  grid-row-start: 1;
  //padding-top: 12px;
//  font-size: 16px;

`

export const PostLink = styled.nav`
  grid-column-start: 3;
//  grid-row-start: 1;
  //padding-top: 12px;
  justify-content: right;
  font-size: 16px;

`


export const PostTitle = styled.nav`
//  grid-column-start: 1;
///  grid-row-start: 1;
  font-size: 24px;
`

export const NavText = styled.nav`
    padding-right: 2rem;

`