import styled from "styled-components";

const WorkSection = styled.section`
    height: 30rem;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
`;

export default WorkSection;

export const CardIcon = styled.img.attrs((props) => ({ src: props.src }))`
    width: 2.813rem;
    height: 2.813rem;
`;

export const CardTitle = styled.h2`
    font-size: 18px;
    color: var(--color-third);
    font-family: "Sora";
`;

export const CardText = styled.p`
    font-size: 16px;
    color: var(--color-text-first);
    font-family: "Inter", sans-serif;
    text-align: center;
`;

export const CardDiv = styled.div`
    height: 12.5rem;
    width: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;
