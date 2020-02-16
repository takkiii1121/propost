import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const commonStyle = {
    appBarColorDefault: {
    backgroundColor: '#6088c6',
    position: 'fixed',
    top: '0',
    width: '100%'
    }
}

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`

export const RightBar = styled.div`
    text-align: right;
    flex-grow: 3;
    margin: 20px;
`

export const NavButton = styled.button`
    color: #fff;
    background: #6088c6;
    border-radius: 20px;
    border: none;
    padding: 10px;
    outline: none;
    &:hover {
        background: #567bb3;
    }
    @media (min-width: 768px) {
        font-size: 20px;
    }
    @media (max-width: 767px) {
        font-size: 13px;
        display: inline-box;
    }
`