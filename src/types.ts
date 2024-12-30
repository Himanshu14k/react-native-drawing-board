import { MutableRefObject } from "react";
import { ViewStyle } from "react-native";

export interface PathData {
  points: [number, number][];
  isErased: boolean;
}

export interface DrawingBoardProps {
  viewShotRef: MutableRefObject<any>;
  paths: PathData[];
  setPaths: React.Dispatch<React.SetStateAction<PathData[]>>;
}

export interface Styles {
  [key: string]: ViewStyle;
}
