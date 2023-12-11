import Matter from 'matter-js';
import {horizontalScale, verticalScale, width} from '../../utils/StyleConfig';
import {getRandomHeight} from '../../utils/Method';
import {ControlProps, EntitiesProps} from '../types';

const BlockSystem = (
  entities: EntitiesProps,
  {time, dispatch}: ControlProps,
): EntitiesProps => {
  let engine = entities.physics.engine;
  if (entities['Block'].body.position.x <= (-1 * horizontalScale(50)) / 2) {
    entities['Block'].scored = false;
    Matter.Body.setPosition(entities['Block'].body, {
      x: width * 2 - horizontalScale(50) / 2,
      y: getRandomHeight(verticalScale(115), verticalScale(365)),
    });
  } else {
    entities['Block'].scored = false;
    Matter.Body.translate(entities['Block'].body, {x: -8, y: 0});
  }

  Matter.Engine.update(engine, time.delta);

  if (
    entities.Block.body.position.x <=
      entities.Ball.body.position.x - width / 2 - horizontalScale(50) / 2 &&
    !entities['Block'].scored
  ) {
    entities['Block'].scored = true;
    dispatch({type: 'score'});
  }
  return entities;
};

export default BlockSystem;
