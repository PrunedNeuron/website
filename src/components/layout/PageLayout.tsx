import React from "react";
import { LayoutWrapper } from "./Styles";
import { Children } from "@/typings/types";

const PageLayout: React.FC<Children> = ({ children }: Children): JSX.Element => {
    return (
        <LayoutWrapper>
            <header>
                {/* <Header /> */}
            </header>
            <main>{children}</main>
            <footer>
                {/* <Footer /> */}
            </footer>
        </LayoutWrapper>
    );
};

export default PageLayout;