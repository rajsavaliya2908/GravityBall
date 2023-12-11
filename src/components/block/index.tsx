import React from 'react';
import {View} from 'react-native';
import Matter from 'matter-js';
import {
  ComponentProps,
  EntityComponentProps,
  PositionProps,
  SizeProps,
} from '../types';
import Colors from '../../utils/Colors';

const Block = ({size, body}: ComponentProps) => {
  const width = size[0];
  const height = size[1];
  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;
  return (
    <View
      style={[
        {
          position: 'absolute',
          left: x,
          top: y,
          width: width,
          height: height,
          backgroundColor: Colors.primary,
          opacity: 0.8,
          overflow: 'hidden',
          borderRadius: 10,
        },
      ]}
    />
  );
};

export default (
  world: Matter.World,
  pos: PositionProps,
  size: SizeProps,
): EntityComponentProps => {
  const blockInitialize = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {isStatic: true, friction: 1},
  );
  Matter.World.add(world, [blockInitialize]);

  return {
    body: blockInitialize,
    size: [size.width, size.height],
    renderer: Block,
  };
};
