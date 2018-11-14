import * as React from 'react';
import { StatelessComponent } from 'react';

import './panel.less';

interface PanelProps {
  className?: string
  children: any;
}

export const Panel: StatelessComponent<PanelProps> = ({ children, className }) => {
  return (
    <div className={`panel ${className? className : ''}`}>
      {children}
    </div>
  )
}

Panel.displayName = 'Panel';