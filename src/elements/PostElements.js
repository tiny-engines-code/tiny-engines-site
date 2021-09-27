import styled from "styled-components"


export const PostWrapper = styled.main`
  grid-column: 3 / span 12;
  grid-row: 3 / span 5;
  background-color: hsl(0,0%,99%);
  padding: 3rem 6rem;
  box-shadow: 0px 5px 20px rgba(30, 30, 31, 0.05);
  font-size: 14px;
  line-height: 1rem;
  z-index: 10;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: hsl(227,2%,12%);
  }

  h1:not(:first-child),
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }

  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 400;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 400;
  }

  h3 {
    font-size: 1.375rem;
    line-height: 1.625rem;
    font-weight: 700;
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  h5 {
    font-size: 1.125rem;
    line-height: 1.375rem;
    font-weight: 700;
  }

  h6 {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-size: 1rem;
    line-height: 1.875rem;
    font-weight: 400;
    color: hsl(227,2%,26%);
    margin-top: 2rem;
  }

  a {
    color: hsl(207,70%,59%);
    text-decoration: underline;
  }

  strong {
    font-weight: 700;
  }

  em {
    font-style: italic;
  }

  del {
    text-decoration: line-through;
  }

  blockquote p {
    font-style: italic;
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: center;
    max-width: 36rem;
    margin: 3rem auto;
  }

  ul,
  ol {
    color: hsl(227,2%,26%);
    margin: 1rem 0 1rem 2rem;
  }

  li {
    margin: 0.25rem 0;
    line-height: 1.5rem;
  }

  code {
    font-family: Roboto Mono, monospace;
    font-size: 1rem;
    line-height: 1.875rem;
    color: hsl(0,0%,97%);
    background-color: hsl(227,2%,64%);
    padding: 0 0.3rem;
  }

  hr {
    border: 0;
    height: 1px;
    background: hsl(227,2%,12%);
    opacity: 0.1;
    margin-top: 2rem;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  th {
    font-weight: 700;
  }

  table,
  th,
  td {
    border: 1px solid hsl(227,2%,64%);
  }

  th,
  td {
    text-align: left;
    padding: 0.5rem;
  }


`
