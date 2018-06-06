import React from 'react';

import style from './styles.scss';

export default class Chart extends React.Component {
  render() {
    const { height } = this.props;

    let chartOne = {
      height: `${height}rem`,
    };

    let chartTwo = {
      height: `${height*2.2}rem`,
    };

    let chartThree = {
      height: `${height*0.4}rem`,
    };

    return (
      <div className="chart-wrapper">
        <div className="chart-one" style={chartOne}>
          <p>Product 1</p>
        </div>
        <div className="chart-two" style={chartTwo}>
          <p>Product 2</p>
        </div>
        <div className="chart-three" style={chartThree}>
          <p>Product 3</p>
        </div>
      </div>
    );
  }
};
