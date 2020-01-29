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
    margin: 10px 0 30px 15%;
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
`

export const Button = styled.button`
    width: 50%;
    height: 40px;
    margin: 50px 0 30px 15%;
    border-radius: 20px;
    background: #eb8686;
    color: #fff;
    font-size: 20px;
    border-color: #eb8686;
    outline: 0;
    &:hover {
        background: #ee9797;
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
    &:hover {
        background: #f09090;
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