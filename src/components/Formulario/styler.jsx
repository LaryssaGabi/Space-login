import styled from 'styled-components';

export const Superior = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40vh;


    h1{
        font-size: 2.5rem;
        color: #fdfdfd;

    }

    img{
        width: 100px;
    }

`;


export const Box = styled.div`
    min-height: 28vh;
    width: 100%;
    background-position: center;
    background-size: cover;
    position: relative;
`;

export const LoginBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 350px;
    padding: 40px;
    margin: 20px auto;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 255, 255, 0.568);
    border-radius: 10px;
    background: #000000bb;
`;

export const Titulo = styled.h2`
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const UserBox = styled.div`
    position: relative;
    margin-bottom: 20px;

    input {
        width: 100%;
        padding: 10px 0;
        font-size: 15px;
        color: #fff;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
        margin-bottom: 30px;

        &:focus {
            border-bottom: 1px solid aqua; 
        }

        &:focus + label,
        &:valid + label {
            top: -20px;
            left: 0;
            color: aqua;
            font-size: 12px;
        }
    }

    label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: 0.5s;
    }
`;

export const SubmitButton = styled.a`
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    font-weight: bold;
    width: 8vw;
    color: aqua;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 40px;
    letter-spacing: 3px;
    border-radius: 10%;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 24px rgba(0, 255, 255, 0.404);
    }
`;
