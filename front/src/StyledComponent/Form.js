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
    width: 500px;
    font-size: 30px;
    outline: 0;
`

export const Field = styled.div`
    margin: 50px 0 30px 15%;
    position: static;
`

export const Label = styled.div`
    color: #fff;
    font-size: 20px;
    position: relative;
    bottom: ${props => props.active ? '10px' : '-45px'};
    transition: all 300ms 0s ease;
`

export const FormPage = styled.div`
    background: #6088c6;
    padding: 10px;
    min-height: 1915px;
`

export const Button = styled.button`
    width: 500px;
    height: 40px;
    margin: 50px 0 30px 15%;
    border-radius: 20px;
    background: #eb8686;
    color: #fff;
    font-size: 20px;
    border-color: #eb8686;
    outline: 0;
    &:hover {
        background: #f09090;
    }
`