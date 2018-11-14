import * as React from 'react';

import './profile-info.less';

type ProfileInfoProps = {
  label: string;
  value: string;
  className?: string;
}

export class ProfileInfo extends React.Component<ProfileInfoProps> {
    render() {
        const { label, value, className } = this.props;

        return (
          <div className={`profile-info ${className? className : ''}`}>
            <div className="label">{`${label}:`}</div>
            <div className="value">{value}</div>
          </div>
        );
    }
};