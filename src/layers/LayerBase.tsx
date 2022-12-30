import { Container } from "@mui/material";
import React, { FunctionComponent } from "react";
import Header from "../components/header";

export interface ILayerProps {
  data?: any
};

export type LayerComponent = FunctionComponent<ILayerProps>;

interface ILayerBaseProps {
  children: React.ReactNode
}

const LayerBase = ({ children }: ILayerBaseProps) => {
  return(
    <React.Fragment>
      <Header></Header>
      <Container>
        {children}
        <div>Footer</div>
      </Container>
    </React.Fragment>
  );
};

export default LayerBase;