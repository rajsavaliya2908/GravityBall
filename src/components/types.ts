import Matter, {Engine, World} from 'matter-js';
import {TextStyle, ViewStyle} from 'react-native';

export interface ComponentProps {
  size: number[];
  body: Matter.Body;
  scored?: boolean;
}

export interface PhysicsProps {
  engine: Engine;
  world: World;
}

export interface EntitiesProps {
  physics: PhysicsProps;
  Ball: ComponentProps;
  Block: ComponentProps;
  Bottom: ComponentProps;
  Top?: ComponentProps;
}

export interface TimeProps {
  delta: number;
}

export interface TouchProps {
  type: 'press' | 'otherType';
  event: string;
  timestamp: number;
}

export interface ControlProps {
  time: TimeProps;
  touches: TouchProps[];
  dispatch: ({type}: {type: string}) => {};
}

export interface PositionProps {
  x: number;
  y: number;
}

export interface SizeProps {
  width: number;
  height: number;
}

export interface EntityComponentProps {
  body: Matter.Body;
  size: number[];
  renderer: (props: ComponentProps) => React.ReactNode;
}

export interface ModalControlProps {
  onRequestClose: () => void;
  onPlayAgainPress: () => void;
  onGoBackPress: () => void;
  isVisible: boolean;
  score: number;
}

export interface ButtonProps {
  title: string;
  onPress: () => void;
  textStyle?: TextStyle;
  buttonStyle?: ViewStyle;
}
