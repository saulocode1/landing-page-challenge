import React from "react";
import WorkSection, {
    CardDiv,
    CardTitle,
    CardIcon,
    CardText,
} from "./Work.style";
import SectionTitle from "../../Components/SectionTitle";
import Plus from "../../assets/icons/plus.png";

const Work = () => {
    return (
        <>
            <WorkSection>
                <SectionTitle>Como funciona</SectionTitle>
                <Card src={Plus} />
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
                <CardTitle>Crie conexões</CardTitle>
                <CardText>Lorem ipsum dolor sit amet, consecteteu.</CardText>
            </CardDiv>
        </>
    );
};
