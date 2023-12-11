import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './routes';
import {GameEngine} from 'react-native-game-engine';
import {EntitiesProps} from '../components/types';

export type DashboardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Dashboard'
>;

export interface GameEngineProps extends GameEngine {
  swap(entities: EntitiesProps): void;
}
