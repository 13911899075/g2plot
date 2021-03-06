import * as _ from '@antv/util';
import ApplyResponsiveAxis from '../../../util/responsive/apply/axis';
import LineLayer from '../LineLayer';

export default function responsiveAxis(layer: LineLayer) {
  const responsiveTheme = layer.getResponsiveTheme();
  const canvas = layer.getCanvasController().canvas;
  // x-axis
  const x_responsiveAxis = new ApplyResponsiveAxis({
    plot: layer,
    responsiveTheme,
    dim: 'x',
  });
  // y-axis
  const y_responsiveAxis = new ApplyResponsiveAxis({
    plot: layer,
    responsiveTheme,
    dim: 'y',
  });

  canvas.draw();
}
