import React from "react";
import Body from "@/components/body/Body";
import PageLayout from "@/components/layout/PageLayout";
import { useSpotify } from "@/hooks/useSpotify";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import NowPlaying from "@/components/spotify/NowPlaying";

const Index: React.FC = (): JSX.Element => {
  return (
    <PageLayout>
      {/* <Header /> */}
      <Body />
      <NowPlaying />
    </PageLayout>
  );
};

export default Index;
