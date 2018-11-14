import * as React from 'react';
import { StatelessComponent } from 'react';

import { Panel } from '../components/panel/panel'
import { PanelHeader } from '../components/panel/panel-header/panel-header'
import { ProfileInfo } from '../components/panel/profile-info/profile-info'
import { CVModel } from '../../models/cvmodel';

interface ProfilePanelProps {
  data: CVModel;
}

export const ProfilePanel: StatelessComponent<ProfilePanelProps> = ({ data }) => {
  const { name, email } = data.profile;

  return (
    <Panel className="profile-panel">
      <PanelHeader title="Profile" />
      <ProfileInfo label="Name" value={name} />
      <ProfileInfo label="E-Mail" value={email} />
    </Panel>
  )
}

ProfilePanel.displayName = 'ProfilePanel';