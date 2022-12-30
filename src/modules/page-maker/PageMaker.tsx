import * as Layers from "../../layers"
import { LayerComponent } from "../../layers/LayerBase";

interface IPageMakerProps{
  path: string
};

const testData = {
  layerType: "Scroll",
  data: {
    list: "this is works?"
  },
}

const getLayer = (type: string): LayerComponent | undefined => {
  const layerName = `${type}Layer`;
  if (layerName in Layers) {
    return (Layers as any)[layerName] as LayerComponent;
  }
  return Layers.ListLayer;
};

const PageMaker = () => {
  const Layer = getLayer(testData.layerType);
  if (Layer !== undefined) {
    return (
      <Layer data={testData.data}></Layer>
    );
  }
  return (
    <></>
  )
};

export default PageMaker