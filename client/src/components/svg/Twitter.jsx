import React, { Component } from 'react';

class Twitter extends Component {
  render() {
    let { height, width, color } = this.props
    return (
      <div>
        {/* <?xml version="1.0" encoding="iso-8859-1"?>
        <!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> */}
        <svg height={height} width={width} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 314.652 314.652" space="preserve">
        <g>
          <path fill={color} d="M157.326,0C70.576,0,0,70.576,0,157.326s70.576,157.326,157.326,157.326s157.326-70.576,157.326-157.326
            S244.076,0,157.326,0z M157.326,296.652C80.502,296.652,18,234.15,18,157.326S80.502,18,157.326,18s139.326,62.502,139.326,139.326
            S234.15,296.652,157.326,296.652z"/>
          <path fill={color} d="M188.326,132.806c4.971,0,9-4.029,9-9s-4.029-9-9-9h-53v-9.146c0-4.971-4.029-9-9-9s-9,4.029-9,9v59.448
            c0,29.161,23.724,52.886,52.885,52.886h18.115c4.971,0,9-4.029,9-9s-4.029-9-9-9h-18.115c-19.235,0-34.885-15.649-34.885-34.886
            v-32.302H188.326z"/>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        </svg>
      </div>
    );
  }
}

export default Twitter;