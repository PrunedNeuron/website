import styled from "@emotion/styled";
import { PiSpotifyLogoDuotone } from "react-icons/pi";

export const NowPlayingWrapper = styled.footer`
  font-family: "Roboto Mono", monospace;
  /* border: 0.05rem dotted; */
  position: fixed;
  display: inline-block;
  bottom: 0;
  margin-bottom: 0.5rem;
`;

export const NowPlayingContent = styled.div`
  padding: 0.5rem;
  
`;

export const SpotifyLink = styled.a`
    text-decoration: none;
    color: #6e6e6e;
    &:hover {
        text-decoration: underline dotted #1DB954;
        text-underline-offset: 0.3rem;
        color: #1DB954;
    }
`;

export const SpotifyIcon = styled(PiSpotifyLogoDuotone)`
  font-size: 1.5rem;
  color: #1DB954;
  vertical-align: middle;
  margin-right: 0.5rem;
  margin-bottom: 0.1rem;
`;

export const SpotifyText = styled.p`
  font-weight: 600 !important;
  display: inline;
`;