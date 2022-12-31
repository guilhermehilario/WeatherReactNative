export type BalloonClimateProps = CommonProps & ConditionalProps;

type ConditionalProps = HourProps | DayProps;

export interface CommonProps {
  active?: boolean;
}

export interface HourProps {
  variant: 'hour';
  info: {hour: string; temperature: string};
}

export interface DayProps {
  variant: 'day';
  info: {day: number; weekDay: string};
}

export interface ContainerProps {
  children: React.ReactNode;
}
