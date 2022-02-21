import styled from "styled-components";

const NavLink = styled.a`
    cursor: pointer;
    font-size: 18px;
    color: var(--color-text-first);
    font-family: "Be Vietnam Pro", sans-serif;

    transition: 250ms ease-in-out;

    &:hover {
        color: var(--color-hover);
        transition: 250ms ease-in-out;
    }
`;

export default NavLink;
