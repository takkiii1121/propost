import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideLink = styled(Link)`
    text-decoration: none;
    margin: 0 10%;
    color: #fff;
    display: block;
    text-align: center;
    margin: 10px;
    padding: 0 20px;
    font-size: 20px;
    transition: 300ms;
    transform: scale(1);
    &:hover {
        transform: scale(1.1);
    }
`

export const SideContainer = styled.div`
    margin: 50px 0 0 0;
    padding: 50px 20px 600px 20px;
    width: 232px;
    position: fixed;
    background: #2f394d;
`

export const UserIcon = styled.div`
    color: #fff;
    width: 42px;
    padding: 7px;
    margin: 30%;
    position: relative;
    text-align: center;
    border-radius: 50%;
    background: #2f394d;
    transform: scale(2.3);
    z-index: 10;
`

export const Circle = styled.div`
    position: relative;
    margin: 23%;
    width: 140px;
    height: 140px;
    background: #fff;
    border-radius: 50%;
    text-align: center;
    overflow: hidden;
    z-index: 1;
    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: -70px;
        width: 140px;
        height: 140px;
        background: #2f394d;
        transform-origin: right 70px;
        z-index: 2;
        animation: rotate-circle-left 1s linear forwards;
    }
    &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0px;
        left: 70px;
        width: 140px;
        height: 140px;
        background: #2f394d;
        transform-origin: left 70px;
        z-index: 3;
        animation: rotate-circle-right 1s linear forwards;
    }

    @keyframes rotate-circle-right {
        0%   {
            transform: rotate(0deg);
            background: #2f394d;
        }
        50%  {
            transform: rotate(180deg);
            background: #2f394d;
        }
        50.01% {
            transform: rotate(360deg);
            background: #fff;
        }
        100% {
            transform: rotate(360deg);
            background: #fff;
        }
    }
    
    @keyframes rotate-circle-left {
        0%   { transform: rotate(0deg); }
        50%  { transform: rotate(0deg); }
        100% { transform: rotate(180deg); }
    }
`