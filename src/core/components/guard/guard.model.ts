import { NavigationScreenProp } from 'react-navigation';

export interface GuardProps {
  guard: boolean;
  redirectTo?: string;
  navigation?: NavigationScreenProp<any, any>;
  children: any;
}
