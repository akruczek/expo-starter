import { SCREENS } from '../../navigation/screens';
import { NavigationProps } from '../../navigation/navigation.model';

export interface GuardProps extends NavigationProps {
  counterAccess: boolean;
}

export interface GuardModel {
  hasAccess: boolean;
  redirectTo: string;
}
