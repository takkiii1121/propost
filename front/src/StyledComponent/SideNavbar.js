import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideLink = styled(Link)`
    text-decoration: none;
    outline: none;
    margin: 0 10%;
    color: #fff;
    display: block;
    text-align: center;
    margin: 10px;
    padding: 0 20px;
    transition: 300ms;
    transform: scale(1);
    @media (min-width: 768px) {
        font-size: 20px;
        &:hover {
            transform: scale(1.1);
        }
    }
    @media (max-width: 767px) {
        font-size: 10px;
        &:focus {
            transform: scale(1.1);
        }
    }
`

export const SideContainer = styled.div`
    background: #2f394d;
    color: #fff
    margin: 50px 0 0 0;
    height: 100%;
    @media (min-width: 768px) {
        position: fixed;
        width: 232px;
        padding: 140px 20px 600px 20px;
    }
    @media (max-width: 767px) {
        transition: 300ms;
        width: 100px;
        padding: 90px 5px 50px 5px;
        position: fixed;
        left: ${props => props.isOpen ? '0px' : '-120px;'}
    }
`

export const HamburgerButton = styled.button`
    @media (min-width: 768px) {
        display: none;
    }

    @media (max-width: 767px) {
        outline: none;
        transition: 300ms;
        margin: 10px 0;
        background: #2f394d;
        color: #fff;
        border-radius: 10px;
        position: fixed;
        left: ${props => props.isOpen ? '100px' : '-10px'};
        top: 70px;
    }
    
`

export const UserIcon = styled.div`
    color: #fff;
    position: relative;
    text-align: center;
    border-radius: 50%;
    background: #2f394d;
    transform: scale(2.3);
    z-index: 10;
    @media (min-width: 768px) {
        width: 42px;
        padding: 7px;
        margin: 30%;
        transform: scale(2.3);
    }
    @media (max-width: 767px) {
        width: 40px;
        padding: 7px 5px 5px 5px;
        transform: scale(1);
    }
`

export const Circle = styled.div`
    position: relative;
    background: #fff;
    border-radius: 50%;
    text-align: center;
    overflow: hidden;
    z-index: 1;
    @media (min-width: 768px) {
        width: 140px;
        height: 140px;
        margin: 23%;
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
    }
    @media (max-width: 767px) {
        width: 50px;
        height: 50px;
        margin: 25%;
    }
    
`