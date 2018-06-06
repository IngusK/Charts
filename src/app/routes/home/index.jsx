import React from 'react';
import { observer, inject } from 'mobx-react';
import InputRange from 'react-input-range';
import Chart from '../components/charts/chart.jsx';

import 'react-input-range/lib/css/index.css'
import style from './styles.scss';

@inject('store')
@observer
export default class Home extends React.Component {
  constructor(props) {
   super(props);
   this.state = { value: this.props.store.range };
 }

 createNew(e) {
   this.props.store.updateStore(e);
   this.setState({ value: e })
 }

  render() {

    let { range } = this.props.store;
    range = this.state.value;
    console.log("New store value", this.props.store.range)
    return (
      <div className="main-content">
        <Chart height={range} />
        <div className="slidecontainer">
          <InputRange
            maxValue={20}
            minValue={0}
            value={range}
            // onChange={value => this.setState({ value })}
            onChange={(e) => this.createNew(e)}
          />
        </div>
      </div>
    );
  }
};
