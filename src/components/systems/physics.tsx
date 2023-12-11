import Matter from 'matter-js';
import {ControlProps, EntitiesProps} from '../types';

const Physics = (
  entities: EntitiesProps,
  {time, dispatch}: ControlProps,
): EntitiesProps => {
  let engine = entities.physics.engine;
  Matter.Events.on(engine, 'collisionStart', event => {
    dispatch({type: 'gameOver'});
  });
  Matter.Engine.update(engine, time.delta);
  return entities;
};
export default Physics;
