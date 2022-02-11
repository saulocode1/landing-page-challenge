import styled from "styled-components";
import homeImage from "../../assets/images/home-image.png";

export const HomeSection = styled.section`
    height: 40rem;
    background-color: var(--color-first);
    padding-left: 8.438rem;
    padding-right: 8.438rem;
`;

export const MainTitle = styled.h1`
    font-size: 48px;
    color: var(--color-third);
    font-weight: 600;
    font-family: "Sora", sans-serif;
    margin: 0;
    /* white-space: pre; */
    margin-bottom: 3.125rem;
`;

export const Container = styled.div`
    /* white-space: pre-line; */
    width: 36rem;
    height: 42.875rem;
    padding-top: 11.125rem;
`;

export const WrapperSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
`;

export const HomeImage = styled.img.attrs({ src: homeImage })`
    padding-top: 4.375rem;
`;
