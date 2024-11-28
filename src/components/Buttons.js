import styled from "styled-components"

export const DefaultButton = styled.button`
    background: blue;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    text-transform: capitalize;
    padding: 0.25rem;
    display: block;
    width: 200px;
    margin: 1rem auto;
`

export const PinkButton = styled(DefaultButton)`
    background: pink;
    color: grey;
    border: 1px solid grey;

    &:hover {
        border: 2px solid grey;
    }
`