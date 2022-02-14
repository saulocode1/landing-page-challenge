import styled from "styled-components";
import Google from "../../assets/icons/google-button.svg";
import Apple from "../../assets/icons/apple-button.svg";
import Image from "../../assets/images/download-image.svg";

const DownloadSection = styled.section`
    height: 29.75rem;
    background-color: var(--color-first);
    display: flex;
    justify-content: center;
`;

export const DownloadSectionTitle = styled.h1`
    font-size: 32px;
    font-weight: 600;
    color: var(--color-third);
    font-family: "Sora", sans-serif;
`;

export const WrapperText = styled.div`
    width: 38rem;
    height: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 2rem;
`;

export const DownloadText = styled.p`
    font-size: 16px;
    font-weight: 400;
    font-family: "Sora", sans-serif;
    color: var(--color-text-first);
`;

export const DownloadTextDiv = styled.div`
    width: 29.75rem;
`;

export const WrapperButton = styled.div`
    width: 22rem;
    display: flex;
    justify-content: space-between;
`;

export const GoogleButton = styled.img.attrs({ src: Google })`
    height: 3.261rem;
    cursor: pointer;
`;

export const AppleButton = styled.img.attrs({ src: Apple })`
    height: 3.261rem;
    cursor: pointer;
`;

export const DownloadImage = styled.img.attrs({ src: Image })``;

export const Container = styled.div`
    width: 70vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default DownloadSection;
