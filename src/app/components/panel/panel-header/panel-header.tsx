import * as React from 'react';
import { StatelessComponent } from 'react';

import './panel-header.less';

interface PanelHeaderProps {
  title: string;
}

export const PanelHeader: StatelessComponent<PanelHeaderProps> = ({ title }) => {
  return (
    <div className="panel-header">
      {title}
    </div>
  )
}

PanelHeader.displayName = 'PanelHeader';