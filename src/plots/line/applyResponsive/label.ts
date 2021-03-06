import * as _ from '@antv/util';
import ApplyResponsiveLabel from '../../../util/responsive/apply/label';
import LineLayer from '../LineLayer';

class ApplyResponsiveLineLabel extends ApplyResponsiveLabel {
  protected getType() {
    const props = this.plot.initialProps;
    if (props.label && props.label.type) {
      return props.label.type;
    }
    return 'point';
  }
}

export default function responsivePointLabel(layer: LineLayer) {
  const responsiveTheme = layer.getResponsiveTheme();
  const applyResponsiveLineLabel = new ApplyResponsiveLineLabel({
    plot: layer,
    responsiveTheme,
  });
}
