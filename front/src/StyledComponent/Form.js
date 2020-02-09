import styled from 'styled-components'

export const Input = styled.input`
    position: relative;
    bottom: ${props => props.active ? '10px' : '0px'};
    height: ${props => props.active ? '70px' : '50px'};
    transition: all 300ms 0s ease;
    border-width: 4px 0 4px 0;
    border-color: #fff;
    color: #fff;
    background: rgba(0,0,0,0);
    font-size: 30px;
    outline: 0;
    width: 58%;
`

export const Field = styled.div`
    margin: 10px 0 30px 10%;
    position: static;
    width: 100%+
`

export const Label = styled.div`
    color: #fff;
    font-size: 20px;
    position: relative;
    bottom: ${props => props.active ? '10px' : '-45px'};
    transition: all 300ms 0s ease;
`

export const FormPage = styled.div`
    padding: 10px;
    margin: ${props => props.margin};
`

export const Button = styled.button`
    width: 53%;
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
`
export const CreateButton = styled.button`
    width: 100px;
    height: 40px;
    float: right;
    margin: 10px 30px;
    color: #fff;
    background: #eb8686;
    border-radius: 20px;
    border-color: #eb8686;
    outline: 0;
    font-size: 20px;
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
`

export const TitleInput = styled.input`
    outline: 0;
    font-size: 30px;
    border-width: 0 0 2px 0;
    margin: 10px 20px;
    padding: 10px;
    border-color: #ccc;
    color: #666666;
`

export const MarkdownInput = styled.div`
    margin: 20px;
    padding: 10px;
    font-size: 30px;
`