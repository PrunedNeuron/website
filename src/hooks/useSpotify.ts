import useSWR from "swr";
import { NowPlayingData } from "@/typings/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useSpotify = () => {
    const { data, error } = useSWR<NowPlayingData>("/api/spotify", fetcher, {
        refreshInterval: 60000,
    });

    return {
        data,
        isLoading: !error && !data,
        isError: error,
    };
};
