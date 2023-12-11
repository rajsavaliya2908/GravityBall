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

const Bottom = ({size, body}: ComponentProps) => {
  const width = size[0];
  const height = size[1];
  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;
  return (
    <Image
      style={{
        width: width,
        height: height,
        position: 'absolute',
        left: x,
        top: y,
      }}
      source={Images.ic_bottom}
      resizeMode="stretch"
    />
  );
};

export default (
  world: Matter.World,
  pos: PositionProps,
  size: SizeProps,
): EntityComponentProps => {
  const floorInitialize = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {isStatic: true, friction: 1},
  );
  Matter.World.add(world, [floorInitialize]);

  return {
    body: floorInitialize,
    size: [size.width, size.height],
    renderer: Bottom,
  };
};
