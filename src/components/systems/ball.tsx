import Matter from 'matter-js';
import {ControlProps, EntitiesProps} from '../types';

const BallSystem = (
  entities: EntitiesProps,
  {time, touches}: ControlProps,
): EntitiesProps => {
  const engine = entities.physics.engine;
  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
      Matter.Body.setVelocity(entities.Ball.body, {
        x: entities.Ball.body.velocity.x,
        y: -3,
      });
    });
  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default BallSystem;
