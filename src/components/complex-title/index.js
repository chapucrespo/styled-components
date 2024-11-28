import React from 'react'
import { Container } from './styled'

const ComplexTitle = ({title}) => {
    return (
        <Container special>
            <h1>{title}</h1>
            <div className='underline'></div>
            <div className='box'></div>
        </Container>
    )
}

export default ComplexTitle