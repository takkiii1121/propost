import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    display: block;
    text-align: center;
    margin: 10px;
    font-size: 20px;
    &:hover {
        text-decoration: underline;
    }
`

export const SideContainer = styled.div`
    margin: 40px 10px;
`

export const UserIcon = styled.div`
    color: #fff;
    text-align: center;
    font-size: 100px;
    margin: 30px 0;
`