import columnWidth from './columnWidth';
import elementCollision from './elementCollision';
import elementDist from './elementDist';
import elementDistVertical from './elementDistVertical';
import elementWidth from './elementWidth';
import minRingThickness from './minRingThickness';
import ringThickness from './ringThickness';

/** constraints约束库 */
export interface IConstraint {
  usage: string;
  type: string;
  method: (...args: any) => any;
}

export const constraintsLib = {
  elementDist,
  elementDistVertical,
  elementCollision,
  elementWidth,
  columnWidth,
  ringThickness,
  minRingThickness,
};

export function registerResponsiveConstraint(name, constraint: IConstraint) {
  // todo: 防止覆盖
  constraintsLib[name] = constraint;
}
