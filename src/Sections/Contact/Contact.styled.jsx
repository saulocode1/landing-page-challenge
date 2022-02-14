import styled from "styled-components";
import Background from "../../assets/images/contact-background.png";

export const ContactSection = styled.section`
    height: 24.5rem;
    display: flex;
    flex-direction: column;
    background: url(${Background}) no-repeat;
    background-position: center;
    background-size: cover;
    align-items: center;
`;

export const TextContactDiv = styled.div`
    max-width: 33rem;
    margin-top: 1rem;
`;

export const ContactText = styled.p`
    color: var(--color-text-second);
    font-size: 18px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    text-align: center;
`;

export const ContactInput = styled.input.attrs({
    placeholder: "Seu melhor e-mail",
})`
    outline: none;
    border: none;
    border-bottom: 1px solid var(--color-white);
    height: 2.188rem;
    width: 18.75rem;
    background-color: transparent;
    font-size: 18px;
    margin-top: 6.25rem;
    font-family: "Inter", sans-serif;

    ::placeholder {
        color: var(--color-white);
    }
`;
