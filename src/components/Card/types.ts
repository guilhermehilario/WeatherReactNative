export interface CardProps {
  climate: ClimateTypeProps;
  temperature: string;
  feel: string;
  timeCourse: string;
  timeDay: string;
}

export type ClimateTypeProps =
  | 'Sun-cloud-mid-rain'
  | 'Cloud-zap'
  | 'Moon-cloud-fast-wind'
  | 'Mid-snow-fast-winds';
