import styled from 'styled-components'
import { colors, setBorder } from '../../utils'

export const Container = styled.div`
    h1 {
        text-transform: capitalize;
        text-align: center;
    }

    .underline {
        width: 5rem;
        height: 0.25rem;
        margin: 0 auto;
        //? Distintas opciones para agrupar variables. 
        //! En el root como var, en utils o en un theme con theme provider
        /* background: ${({special}) => special ? `var(--primary-color)` : 'blue'} */
        /* background: ${colors.primary} */
        background: ${({theme}) => theme.colors.primary}
    }

    .box {
        height: 15px;
        border: ${setBorder({width: 4, type: 'solid', color: 'red'})}
    }
`