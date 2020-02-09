import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Card = styled.div`
    margin: 20px;
    padding: 10px;
    width: 80%;
    background: #fff;
    border-radius: 20px;
    display: inline-block;
    border-color: #aec4e5;
    border-style: solid;
    border-width: 2px;
    overflow: hidden;
`

export const CardTitle = styled.div`
    font-size: 200%;
    margin: 10px 30px;
    font-weight: bold;
    color: #696969;
`

export const CardBody = styled.div`
    margin: 30px;
    font-size: 100%;
    max-height: 50px;
    color: #969696;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const CardTime = styled.div`
    margin: 20px;
    text-align: right;
    font-size: 15px;
    color: #969696;
`

export const CardLink = styled(Link)`
    text-align: center;
    padding: 10px 43%;
    border-radius: 20px;
    background: #aec4e5;
    color: #fff;
    text-decoration: none;
`

export const CardLinkCenter = styled.div`
    text-align: center;
`

export const Button = styled.button`
    color: #fff;
    text-decoration: none;
    background: ${props => props.color};
    border-color: ${props => props.color};
    border-radius: 20px;
    text-align: center;
    margin: 5px 10px;
    font-size: 16px;
    width: 95%;
    padding: 5px 5%;
    &:hover {
        background: ${props => props.hover};
    }
`
