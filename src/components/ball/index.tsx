import React from 'react';
import {Image} from 'react-native';

import Matter from 'matter-js';
import {
  ComponentProps,
  EntityComponentProps,
  PositionProps,
  SizeProps,
} from '../types';
import Images from '../../assets/images';

const Ball = ({size, body}: ComponentProps) => {
  const width = size[0];
  const height = size[1];
  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;

  return (
    <Image
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: width,
        height: height,
        resizeMode: 'contain',
      }}
      source={Images.ic_ball}
    />
  );
};

export default (
  world: Matter.World,
  pos: PositionProps,
  size: SizeProps,
): EntityComponentProps => {
  const ballInitialize = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
  );
  Matter.World.add(world, [ballInitialize]);

  return {
    body: ballInitialize,
    size: [size.width, size.height],
    renderer: Ball,
  };
};
