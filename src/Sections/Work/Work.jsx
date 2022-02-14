import React from "react";
import WorkSection, {
    CardDiv,
    CardTitle,
    CardIcon,
    CardText,
    WrapperCards,
} from "./Work.style";
import SectionTitle from "../../Components/SectionTitle";
import Plus from "../../assets/icons/plus.png";
import Smile from "../../assets/icons/smile.png";
import Shield from "../../assets/icons/shield.png";

const Work = () => {
    return (
        <>
            <WorkSection>
                <SectionTitle color="var(--color-third)">
                    Como funciona
                </SectionTitle>

                <WrapperCards>
                    <Card
                        src={Plus}
                        title="Crie conexões"
                        text="Lorem ipsum dolor sit amet, consecteteu."
                    />
                    <Card
                        src={Shield}
                        title="100% gratuito"
                        text="Lorem ipsum dolor sit amet, consecteteu."
                    />
                    <Card
                        src={Smile}
                        title="Compartilhamento"
                        text="Lorem ipsum dolor sit amet, consecteteu."
                    />
                </WrapperCards>
            </WorkSection>
        </>
    );
};

export default Work;

export const Card = ({ ...props }) => {
    return (
        <>
            <CardDiv>
                <CardIcon src={props.src} />
                <CardTitle>{props.title}</CardTitle>
                <CardText>{props.text}</CardText>
            </CardDiv>
        </>
    );
};
