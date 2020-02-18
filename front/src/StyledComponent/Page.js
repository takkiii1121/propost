import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const PageTitle = styled.div`
    margin: 20px;
    padding: 10px;
    font-weight: bold;
    color: #666666;
    @media (min-width: 768px) {
        font-size: 30px;
    }
    @media (max-width: 767px) {
        font-size: 20px;
    }
`

export const PageText = styled.div`
    width: 80%;
    margin: 20px;
    padding: 10px;
    color: #666666;
    font-size: 15px;
`

export const PageColor = styled.div`
    background: #fff;
    margin: 60px 0 0 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 60px;
    @media (min-width: 1025px) {
        padding: 50px 50px 0px 30px;
    }
    @media (max-width: 767px) {
        padding: 10px;
    }
`

export const PostBody = styled.div`
    width: 80%;
    margin: 20px;
    padding: 10px;
    color: #666666;
    border-top: solid;
    border-bottom: solid;
    border-color: #ccc;
    @media (min-width: 768px) {
        font-size: 20px;
    }
    @media (max-width: 767px) {
        font-size: 15px;
    }
`

export const PageLink = styled(Link)`
    margin: 30px;
    color: #666666;
    text-decoration: none;
    display: inline-block;
    transform: scale(1);
    transition: 300ms;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
    @media (min-width: 768px) {
        font-size: 20px;
    }
    @media (max-width: 767px) {
        font-size: 15px;
    }
`

export const TabColor = styled.div`
    color: #2f394d;
`