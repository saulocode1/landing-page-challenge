import styled from "styled-components";

export const BRL = styled.h2`
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: var(--color-third);
    font-weight: 700;
    position: absolute;
    color: ${(props) => props.color}

`;

export const Number = styled.h2`
    font-family: "Roboto", sans-serif;
    font-size: 50px;
    color: var(--color-third);
    font-weight: 700;
    position: absolute;
    top: -0.688rem;
    right: 4rem;
    color: ${(props) => props.color}

`;

export const Month = styled.h2`
    font-family: "Roboto", sans-serif;
    font-size: 26px;
    color: var(--color-third);
    font-weight: 700;
    position: absolute;
    position: absolute;
    top: 10px;
    right: 1px;
    color: ${(props) => props.color}

`;

export const PriceDiv = styled.div`
    width: 9.125rem;
    height: 2.438rem;
    position: relative;
    margin-bottom: 3.063rem;
`;


