import { ParamListBase, RouteProp } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';


export interface   IStackScreenProps{
    name: String;
    navigation: StackNavigationProp ;
    route: RouteProp<ParamListBase, any>;

}