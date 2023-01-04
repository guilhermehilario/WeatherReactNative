export interface CardDayProps {
  dayNumber: number;
  month: string;
  weekDay: string;
  temperature: string;
  iconClimate: ClimateTypeProps;
  climate: string;
}

export type ClimateTypeProps =
  | 'Sun-cloud-mid-rain'
  | 'Cloud-zap'
  | 'Moon-cloud-fast-wind'
  | 'Mid-snow-fast-winds'
  | 'Moon-fast-wind';
