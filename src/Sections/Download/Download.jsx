import React from "react";
import DownloadSection, {
    GoogleButton,
    AppleButton,
    DownloadSectionTitle,
    DownloadText,
    DownloadTextDiv,
    WrapperText,
    WrapperButton,
    Container,
    DownloadImage,
} from "./Download.style";

const Download = () => {
    return (
        <>
            <DownloadSection>
                <Container>
                    <WrapperText>
                        <DownloadSectionTitle>
                            Baixe nosso app para desfrutar mais!
                        </DownloadSectionTitle>

                        <DownloadTextDiv>
                            <DownloadText>
                                Amet in elementum nulla scelerisque dui, egestas
                                at. Elit consectetur turpis elementum amet vitae
                                et etiam nec. Varius volutpat hac adipiscing
                                tincidunt pretium.
                            </DownloadText>
                        </DownloadTextDiv>

                        <WrapperButton>
                            <GoogleButton />
                            <AppleButton />
                        </WrapperButton>
                    </WrapperText>
                    <DownloadImage />
                </Container>
            </DownloadSection>
        </>
    );
};

export default Download;
