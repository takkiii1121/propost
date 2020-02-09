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
    width: 95%;
    height: 15%;
    font-size: 15px;
    position: relative;
    padding: 5px;
    margin: 5px;
    color: #fff;
    border: 1px solid ${props => props.color};
    background: ${props => props.color};
    border-radius: 20px;
    transition: 300ms;
    z-index: 1;
    overflow: hidden;
    &::after {
        content: '';
        position: absolute;
        z-index: -1;
        height: 0;
        top: 50%;
        left: 50%;
        width: 0;
        background: ${props => props.hover};
        transition: 300ms;
    }   
    &:hover {
        border: 2px solid ${props => props.hover};
        font-weight: bold;
        padding: 4px;
        &:after {
            height: 100%;
            top: 0;
            left: 0;
            width: 100%;
        }
    }
`
