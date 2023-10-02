import React from "react";
import { FooterWrapper, Text, Link } from "./Styles"; // Assuming you have defined these styled components
import { NowPlayingData } from "@/typings/types";

interface FooterProps {
  spotifyData: NowPlayingData | null;
}

const Footer: React.FC<FooterProps> = ({ spotifyData }): JSX.Element => {
  return (
    <FooterWrapper>
      <Text>{spotifyData ? `Now playing: ${spotifyData.title} by ${spotifyData.artist}` : "No data available"}</Text>
    </FooterWrapper>
  );
};

export default Footer;
