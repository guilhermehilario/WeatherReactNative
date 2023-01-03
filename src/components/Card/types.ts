export interface CardProps {
  climate: ClimateTypeProps;
}

export type ClimateTypeProps =
  | 'Sun-cloud-mid-rain'
  | 'Cloud-zap'
  | 'Moon-cloud-fast-wind'
  | 'Mid-snow-fast-winds';
