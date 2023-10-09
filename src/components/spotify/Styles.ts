import styled from "@emotion/styled";
import { PiSpotifyLogoDuotone } from "react-icons/pi";

export const NowPlayingWrapper = styled.div`
    font-size: 0.9rem;
    padding-bottom: 0.25rem;
`;

export const NowPlayingContent = styled.div``;

export const SpotifyLink = styled.a`
    text-decoration: none;
    color: #6e6e6e;
    &:hover {
        text-decoration: underline dotted #1db954;
        text-underline-offset: 0.3rem;
        color: #1db954;
    }
`;

export const SpotifyIcon = styled(PiSpotifyLogoDuotone)`
    font-size: 1.5rem;
    color: #1db954;
    vertical-align: middle;
    margin-right: 0.5rem;
    margin-bottom: 0.1rem;
`;

export const SpotifyText = styled.p`
    font-weight: 600;
    display: inline;
`;
