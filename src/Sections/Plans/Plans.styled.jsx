import styled from "styled-components";

const PlansSection = styled.section`
    height: 53.125rem;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PlansText = styled.p`
    font-size: 18px;
    font-family: "Inter", sans-serif;
    color: var(--color-text-first);
    font-weight: 400;
`;

export const TextDiv = styled.div`
    width: 18.75rem;
    text-align: center;
    margin-top: 1rem;
`;

export const CardTitle = styled.h1`
    color: ${(props) => props.titleColor};
    font-size: 24px;
    font-family: "Sora", sans-serif;
    font-weight: 600;
    margin-bottom: 3.688rem;
`;

export const CardText = styled.p`
    font-size: 18px;
    font-family: "Inter", sans-serif;
    color: var(--color-text-first);
    font-weight: 400;
    margin-bottom: 3.625rem;
    color: ${(props) => props.textColor}
`;

export const CardButton = styled.a`
    background-color: var(--color-second);
    color: var(--color-white);
    padding: 0.5rem 5rem;
    text-decoration: none;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 1px 3px 4px rgba(19, 125, 224, 0.5);
    font-size: 20px;
    font-family: "Nunito", sans-serif;
`;

export const CardDiv = styled.div`
    background-color: var(--color-first);
    height: 29.438rem;
    padding: 0 2.188rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* gap: 3.5rem; */
    border-radius: 8px;
    background-color: ${(props) => props.background};
`;

export const Container = styled.div`
    width: 73rem;
    display: flex;
    justify-content: space-between;
    margin-top: 6rem;
`;
export default PlansSection;
