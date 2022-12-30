import { Container, styled } from "@mui/material";
import React, { FunctionComponent, useRef } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

export interface ILayerProps {
  data?: any
};

export type LayerComponent = FunctionComponent<ILayerProps>;

interface ILayerBaseProps {
  children: React.ReactNode
}

const LayerContainer = styled(Container)({
  width: "100%",
  height: "100vh",
  overflow: "scroll",
  scrollbarWidth: "thin",
})

const LayerChildContainer = styled(Container)({
  width: "100%",
  minHeight: "calc(100% - 50px)"
})

const LayerBase = ({ children }: ILayerBaseProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollDown = () => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current!!.scrollHeight,
      behavior: 'smooth'
    });
  };

  return(
    <React.Fragment>
      <Header onContactClick={scrollDown}/>
      <LayerContainer ref={scrollRef}>
        <LayerChildContainer>
          {children}
        </LayerChildContainer>
        <Footer/>
      </LayerContainer>
    </React.Fragment>
  );
};

export default LayerBase;