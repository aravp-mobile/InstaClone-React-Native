import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import type { RouteProp } from '@react-navigation/native';
import { ROUTES } from '../src/constants/routeName';


export type ApplicationStackParamsList = {
    [ROUTES.LOGIN_SCREEN] = undefined;
}

export type ApplicationScreenProps = 
    StackScreenProps<ApplicationStackParamsList>
