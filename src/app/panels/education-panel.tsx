import * as React from 'react';
import { StatelessComponent } from 'react';

import { Panel } from '../components/panel/panel'
import { PanelHeader } from '../components/panel/panel-header/panel-header'
import { ProfileInfo } from '../components/panel/profile-info/profile-info'
import { EducationInfo } from '../components/panel/education-info/education-info';
import { CVModel } from '../../models/cvmodel';

interface EducationPanelProps {
  data: CVModel;
}

export const EducationPanel: StatelessComponent<EducationPanelProps> = ({ data: { education } }) => {
  return (
    <Panel className="education-panel">
      <PanelHeader title="Education" />
      {education.map(e => {
        const { institute, details, duration} = e;
        return <EducationInfo institute={institute} details={details} duration={duration} />
      })}
    </Panel>
  )
}

EducationPanel.displayName = 'EducationPanel';