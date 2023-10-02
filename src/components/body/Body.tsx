import React from "react";
import { BodyWrapper, Link, Primary, Text } from "./Styles";

const Body: React.FC = (): JSX.Element => {
    return (
        <BodyWrapper>
            <Text>ayush.</Text>
            <Text>non award winning programmer</Text>
            <Text>
                pgp:
                &nbsp;
                <Link href="https://keys.openpgp.org/vks/v1/by-fingerprint/CAB62CF0B4FD4570AF87B777F1FF369B8389B492">
                    0xF1FF369B8389B492
                </Link>
            </Text>
            <Text>
                keybase:
                &nbsp;
                <Link href="https://keybase.io/ayushm">
                    ayushm
                </Link>
            </Text>
            <Text>
                email:
                &nbsp;
                <Primary>*</Primary>
                &nbsp;
                <Link href="mailto:aym@protonmail.ch">aym@protonmail.ch</Link>
                &nbsp;
                &nbsp;
                <Link href="mailto:ayush@envs.net">ayush@envs.net</Link>
            </Text>
        </BodyWrapper>
    );
};

export default Body;