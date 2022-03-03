import React from "react";
import BlueButton from "../../Components/BlueButton";
import {
    HomeSection,
    MainTitle,
    Container,
    HomeImage,
    WrapperSection,
} from "./Home.style";

const Home = () => {
    return (
        <>
            <HomeSection id="home">
                <WrapperSection>
                    <Container>
                        <MainTitle>
                            Rachi, <br />
                            é tudo que você <br />
                            precisa em um só lugar.
                        </MainTitle>

                        <BlueButton>Cadastrar-se</BlueButton>
                    </Container>
                    <HomeImage />
                </WrapperSection>
            </HomeSection>
        </>
    );
};

export default Home;
