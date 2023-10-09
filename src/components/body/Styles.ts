import styled from "@emotion/styled";

// export const BodyWrapper = styled.div`
//     font-family: "Martian Mono", "Roboto Mono", "Inconsolata", monospace;
//     padding: 3rem;
// `;

export const BodyWrapper = styled.div`
    margin: 0 auto;
    max-width: 50%;
    font-family: "Roboto Mono", "Inconsolata", "Martian Mono", monospace;
    font-size: 0.9rem;
    border: 1px solid #eaeaea;
    border-radius: 1rem;
    padding: 2rem;
    border: 2px solid #333;
    padding: 2.5rem;
    margin: 4rem auto;
    max-width: 30rem;
    box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.5);
    top: 0;
    transition: all 0.25s ease-out;

    &:hover {
        box-shadow: 10px 10px 0 0 rgba(0, 0, 0, 0.25);
        top: -4px;
    }
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

export const AsciiName = styled.pre`
    margin-top: -1rem;
    font-size: 0.7rem;
`;
