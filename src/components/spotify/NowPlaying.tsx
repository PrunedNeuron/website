import { useSpotify } from "@/hooks/useSpotify";
import {
    NowPlayingContent,
    NowPlayingWrapper,
    SpotifyIcon,
    SpotifyLink,
    SpotifyText,
} from "./Styles";
import { PiSpotifyLogoDuotone } from "react-icons/pi";

const NowPlaying: React.FC = (): JSX.Element => {
    const { data, isLoading, isError } = useSpotify();
    if (isLoading)
        return (
            <NowPlayingWrapper>
                <NowPlayingContent>Loading</NowPlayingContent>
            </NowPlayingWrapper>
        );
    if (isError)
        return (
            <NowPlayingWrapper>
                <NowPlayingContent>Error fetching data</NowPlayingContent>
            </NowPlayingWrapper>
        );

    if (!data?.isPlaying) return <></>;

    return (
        <NowPlayingWrapper>
            <NowPlayingContent>
                Currently listening to: <SpotifyIcon />
                <SpotifyLink href={data?.songUrl}>
                    <SpotifyText>{data?.title}</SpotifyText> by{" "}
                    <SpotifyText>{data?.artist}</SpotifyText>
                </SpotifyLink>
            </NowPlayingContent>
        </NowPlayingWrapper>
    );
};

export default NowPlaying;
