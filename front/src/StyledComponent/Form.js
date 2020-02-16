import styled from 'styled-components'

export const Input = styled.input`
    position: relative;
    transition: all 300ms 0s ease;
    border-width: 4px 0 4px 0;
    border-color: #fff;
    color: #fff;
    background: rgba(0,0,0,0);
    outline: 0;
    @media (min-width: 768px) {
        width: 58%;
        font-size: 30px;
        bottom: 0px;
        height: 50px;
        &:hover {
            bottom: 10px;
            height: 70px;
        }
    }
    @media (max-width: 767px) {
        width: 75%;
        font-size: 15px;
        bottom: 0px;
        height: 20px;
        &:hover {
            bottom: 10px;
            height: 30px;
        }
    }
`

export const Field = styled.div`
    margin: 55px 0 30px 10%;
    position: static;
    width: 100%;
`

export const Label = styled.div`
    color: #fff;
    position: relative;
    bottom: 10px;
    transition: all 300ms 0s ease;
    @media (min-width: 768px) {
        font-size: 20px;
    }
    @media (max-width: 767px) {
        font-size: 15px;
    }
`
export const FormPage = styled.div`
    width: 75%;
    padding: 60px 0 80px 60px;
    height: 100%;
`

export const Button = styled.button`
    width: 58%;
    height: 40px;
    margin: 50px 0 30px 10%;
    border-radius: 20px;
    position: relative;
    background: #eb8686;
    color: #fff;
    font-size: 20px;
    border-color: #eb8686;
    outline: 0;
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
        background: #eb5e5e;
        transition: 300ms;
    }
    &:hover {
        font-weight: bold;
        &:after {
            height: 100%;
            top: 0;
            left: 0;
            width: 100%;
        }
    }
    @media (min-width: 768px) {
        width: 58%;
    }
    @media (max-width: 767px) {
        width: 75%;
    }
`
export const CreateButton = styled.button`
    float: right;
    margin: 10px 30px;
    color: #fff;
    background: #eb8686;
    border-radius: 20px;
    border-color: #eb8686;
    outline: 0;
    z-index: 1;
    overflow: hidden;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        z-index: -1;
        height: 0;
        top: 50%;
        left: 50%;
        width: 0;
        background: #eb5e5e;
        transition: 300ms;
    }
    &:hover {
        font-weight: bold;
        &:after {
            height: 100%;
            top: 0;
            left: 0;
            width: 100%;
        }
    }
    @media (min-width: 768px) {
        font-size: 20px;
        width: 100px;
        height: 40px;
    }
    @media (max-width: 767px) {
        font-size: 15px;
        width: 60px;
        height: 30px;
    }
`

export const TitleInput = styled.input`
    outline: 0;
    font-size: 30px;
    border-width: 0 0 2px 0;
    margin: 10px 20px;
    padding: 10px;
    border-color: #ccc;
    color: #666666;
    transition: 300ms;
    &:hover {
        border-color: #666666;
    }
    @media (min-width: 768px) {
        font-size: 30px;
    }
    @media (max-width: 767px) {
        font-size: 20px;
    }

`

export const MarkdownInput = styled.div`
    @media (min-width: 768px) {
        margin: 20px;
        padding: 10px;
        font-size: 20px;
    }
    @media (max-width: 767px) {
        margin: 20px;
        font-size: 15px;
    }
`