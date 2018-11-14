import * as React from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import './app.less';

import { PanelType } from '../shared/enums';
import { IAppState } from '../models/app-model';

import { Panel } from './components/panel/panel';
import { ProfileInfo } from './components/panel/profile-info/profile-info';
import { PanelHeader } from './components/panel/panel-header/panel-header';
import { ProfilePanel } from './panels/profile-panel';
import { EducationPanel } from './panels/education-panel';

type AppProps = {
  appState: IAppState
}

@observer
export class App extends React.Component<AppProps> {
  
  public get selectedPanel(): JSX.Element {
    const { currentPanel, data } = this.props.appState;

    switch (currentPanel) {
      case PanelType.Education:
        return <EducationPanel data={data} />
      
      case PanelType.Profile:
      default:
        return <ProfilePanel data={data} />
    } 
  }

  render() {
      const { currentPanel, data } = this.props.appState;

      return (
          <div className="app" onClick={() => this.props.appState.setCurrentPanel(PanelType.Education)}>
            {this.selectedPanel}
            <DevTools />
          </div>
      );
  }
};