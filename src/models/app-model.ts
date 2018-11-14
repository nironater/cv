import { CVModel } from "./cvmodel";
import { PanelType } from "../shared/enums";

export interface IAppState {
  data: CVModel;
  currentPanel: PanelType;
  setCurrentPanel: (newVal: PanelType) => void;
}