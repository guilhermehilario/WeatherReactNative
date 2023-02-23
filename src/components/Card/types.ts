export interface CardProps {
  climate: ClimateTypeProps;
  temperature: string;
  feel?: string;
  timeCourse?: string;
  timeDay?: string;
  children?: React.ReactNode;
  icon?: ClimateTypeProps;
  morning?: boolean;
}

export type ClimateTypeProps =
  | 'Sun-cloud-mid-rain'
  | 'Cloud-zap'
  | 'Moon-cloud-fast-wind'
  | 'Mid-snow-fast-winds';
