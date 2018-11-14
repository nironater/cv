import { observable, action } from 'mobx';

import { PanelType } from '../shared/enums';
import { IAppState } from '../models/app-model';
import { Duration, CVModel } from '../models/cvmodel';

class AppState implements IAppState {
  @observable currentPanel;  
  @observable data: CVModel;

    constructor() {
        this.currentPanel = PanelType.Profile;
        this.data = {
          education: [
            {
              institute: 'Academic Collage Tel-Aviv-Yaffo',
              details: 'Finished with honors',
              duration: {
                from: '2008',
                to: '2013'
              }
            }
          ],
          profile: {
            name: 'Nir Tamir',
            email: 'nir@gmail.com'
          }
        }
    }

    @action setCurrentPanel = (newVal: PanelType): void => {
        this.currentPanel = newVal;
    }

}

export const appState: IAppState = new AppState();
export default appState;