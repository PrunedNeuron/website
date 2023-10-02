import styled from "@emotion/styled";

// export const BodyWrapper = styled.div`
//     font-family: "Martian Mono", "Roboto Mono", "Inconsolata", monospace;
//     padding: 3rem;
// `;

export const BodyWrapper = styled.div`
    font-family: monospace;
    padding: 3rem;
`;

export const Text = styled.p`
    font-weight: 400;
`;

export const SubText = styled.p`
    font-weight: 400;
`;

export const Link = styled.a`
    text-decoration: none;
    color: #6e6e6e;
    &:hover {
        text-decoration: underline dotted red;
        text-underline-offset: 0.3rem;
        color: #383838;
    }
`;

export const Primary = styled.span`
    color: rgb(255, 69, 69);
`;