import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const commonStyle = {
    appBarColorDefault: {
    backgroundColor: '#6088c6',
    position: 'fixed',
    top: '0'
    }
}

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #fff
`

export const RightBar = styled.div`
    text-align: right;
    flex-grow: 3;
    margin: 20px;
`