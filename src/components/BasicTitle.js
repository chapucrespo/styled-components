import styled from "styled-components"

const Title = styled.h1`
  text-align: center;
  text-transform: capitalize;
  /* color: var(--primary-color); */
  color: ${({special}) => special ? `var(--primary-color)` : 'blue'}
`

export default Title