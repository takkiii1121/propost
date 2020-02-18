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

export const NavButton = styled.button.attrs(props => ({
    contents: props.content
}))`
    color: #fff;
    background: #6088c6;
    border-radius: 20px;
    border: none;
    padding: 10px;
    outline: none;
    display: inline;
    transition: 300ms;
    &:hover {
        background: #567bb3;
    }
    
    @media (min-width: 768px) {
        font-size: 20px;
        &::after {
            content: '${props => props.contents}';
        }
    }
    @media (max-width: 767px) {
        font-size: 16px;

    }
`

