import * as React from "react";
import LayerBase, { ILayerProps } from "../LayerBase"

interface IScrollData{
  list: string
}

interface IScrollLayerProps extends ILayerProps {
  data: IScrollData
};

const ScrollLayer = (props: IScrollLayerProps) => {
  return (
    <LayerBase>
      <div>{props.data.list}</div>
    </LayerBase>
  );
};

export default ScrollLayer;