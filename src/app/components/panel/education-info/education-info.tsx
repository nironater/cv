import * as React from 'react';

import './education-info.less';

import { EducationInfoProps } from '../../../../models/cvmodel';

export class EducationInfo extends React.Component<EducationInfoProps> {
    render() {
        const { institute, details, duration } = this.props;

        return (
            <div className="education-info">
                <div className="part duration">{`(${duration.from}-${duration.to})`}</div>
                <div className="part institute">{institute}</div>
                <div className="part separator">-</div>
                <div className="part details">{details}</div>
            </div>
        );
    }
};