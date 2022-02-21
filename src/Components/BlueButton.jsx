import styled from "styled-components";

const BlueButton = styled.button`
    background-color: var(--color-second);
    color: var(--color-white);
    padding: 1rem 2.25rem;
    text-decoration: none;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 1px 3px 4px rgba(19, 125, 224, 0.5);
    font-size: 20px;
    transition: 250ms ease-in-out;

    &:hover {
        background-color: var(--color-hover);
        transition: 250ms ease-in-out;
    }
`;

export default BlueButton;
