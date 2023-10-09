import React from "react";
import { AsciiName, BodyWrapper, Link, Primary, Text } from "./Styles";
import NowPlaying from "../spotify/NowPlaying";

const Body: React.FC = (): JSX.Element => {
    const asciiText = `                         __  
  ____ ___  ____  _______/ /_ 
 / __ \`/ / / / / / / ___/ __ \\
/ /_/ / /_/ / /_/ (__  ) / / /
\\__,_/\\__, /\\__,_/____/_/ /_/ 
     /____/                   
  `;

    return (
        <BodyWrapper>
            <AsciiName>
                <Primary>*</Primary>
                {asciiText}
            </AsciiName>

            <Text>non award winning programmer</Text>
            <Text>
                email: &nbsp;
                <Link href="mailto:aym@protonmail.ch">aym@protonmail.ch</Link>
            </Text>
            <Text>
                pgp: &nbsp;
                <Link href="https://keys.openpgp.org/vks/v1/by-fingerprint/CAB62CF0B4FD4570AF87B777F1FF369B8389B492">
                    0xF1FF369B8389B492
                </Link>
            </Text>
            <Text>
                keybase: &nbsp;
                <Link href="https://keybase.io/ayushm">ayushm</Link>
            </Text>
            <NowPlaying />
        </BodyWrapper>
    );
};

export default Body;
