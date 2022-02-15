import React from "react";
import PlansSection, {
    CardButton,
    CardDiv,
    CardText,
    CardTitle,
    Container,
    PlansText,
    TextDiv,
} from "./Plans.styled";
import SectionTitle from "../../Components/SectionTitle";
import { BRL, Month, Number, PriceDiv } from "./PricePlans";

const Plans = () => {
    return (
        <>
            <PlansSection>
                <SectionTitle color="var(--color-third)">Nossos Planos</SectionTitle>
                <TextDiv>
                    <PlansText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec lacinia mi quis euismod ultrices.
                    </PlansText>
                </TextDiv>
                <Container>
                    <Card
                        title="Bronze"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
                    "
                    ></Card>
                    <Card
                        title="Prata"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices."
                        background="var(--color-third)"
                        titleColor="var(--color-white)"
                        color="var(--color-white)"
                        textColor="var(--color-text-second)"
                    ></Card>
                    <Card
                        title="Ouro"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
                    "
                    ></Card>
                </Container>
            </PlansSection>
        </>
    );
};

export default Plans;

export const Card = (props) => {
    return (
        <>
            <CardDiv background={props.background} color={props.color}>
                <CardTitle titleColor={props.titleColor}>
                    {props.title}
                </CardTitle>
                <Price color={props.color} number={props.number} />
                <TextDiv color={props.color}>
                    <CardText textColor={props.textColor}>{props.text}</CardText>
                </TextDiv>
                <CardButton>Assinar</CardButton>
            </CardDiv>
        </>
    );
};

export const Price = (props) => {
    return (
        <>
            <PriceDiv>
                <BRL color={props.color}>R$</BRL>
                <Number color={props.color}>28</Number>
                <Month color={props.color}>/mês</Month>
            </PriceDiv>
        </>
    );
};
