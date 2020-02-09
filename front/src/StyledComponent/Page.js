import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const PageTitle = styled.div`
    margin: 20px;
    padding: 10px;
    font-size: 30px;
    font-weight: bold;
    color: #666666;
`

export const PageText = styled.div`
    width: 80%;
    margin: 20px;
    padding: 10px;
    font-size: 15px;
    color: #666666;
    opacity: 
`

export const PageColor = styled.div`
    background: #fff;
    padding: 10px;
    min-height: 1915px;
    margin: 65px 0 0 0;
`

export const PostBody = styled.div`
    width: 80%;
    margin: 20px;
    padding: 10px;
    font-size: 20px;
    color: #666666;
    border-top: solid;
    border-bottom: solid;
    border-color: #ccc;
`

export const PageLink = styled(Link)`
    margin: 30px;
    color: #666666;
    text-decoration: none;
    font-size: 20px;
    display: inline-block;
    transform: scale(1);
    transition: 300ms;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`

export const TabColor = styled.div`
    color: #2f394d;
`