import React from "react";
import { ContactInput, ContactSection, ContactText, TextContactDiv } from "./Contact.styled";
import SectionTitle from "../../Components/SectionTitle";

const Contact = (props) => {
    return (
        <>
            <ContactSection>
                <SectionTitle color="var(--color-white)">Contato</SectionTitle>
                <TextContactDiv>
                    <ContactText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec lacinia mi quis euismod ultrices.
                    </ContactText>
                </TextContactDiv>
                <ContactInput/>
            </ContactSection>
        </>
    );
};

export default Contact;
