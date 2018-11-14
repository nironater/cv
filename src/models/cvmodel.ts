export interface Duration {
  from: string;
  to: string
}

export interface ProfileInfoProps {
  name: string;
  email?: string;
}

export interface EducationInfoProps {
  institute: string;
  details: string;
  duration: Duration;
}

export interface CVModel {
  profile: ProfileInfoProps;
  education: EducationInfoProps[];
}