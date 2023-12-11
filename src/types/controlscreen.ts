import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './routes';

export type ControlScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Control'
>;
