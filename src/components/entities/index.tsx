import Matter from 'matter-js';

import {getRandomHeight} from '../../utils/Method';
import {
  height,
  horizontalScale,
  verticalScale,
  width,
} from '../../utils/StyleConfig';
import ball from '../ball';
import block from '../block';
import {EntitiesProps} from '../types';
import bottom from '../bottom';

export default (restart?: EntitiesProps): EntitiesProps => {
  if (restart) {
    Matter.Engine.clear(restart.physics.engine);
  }

  let engine = Matter.Engine.create({enableSleeping: false});
  let world = engine.world;
  engine.gravity.y = 0.25;

  return {
    physics: {engine: engine, world: world},
    Ball: ball(
      world,
      {x: width / 2, y: verticalScale(20)},
      {height: verticalScale(65), width: horizontalScale(70)},
    ),
    Block: block(
      world,
      {
        x: width * 2 - horizontalScale(50) / 2,
        y: getRandomHeight(verticalScale(115), verticalScale(365)),
      },
      {height: verticalScale(245), width: horizontalScale(50)},
    ),
    Bottom: bottom(
      world,
      {x: width / 2, y: height},
      {height: verticalScale(75), width: width},
    ),
  };
};
