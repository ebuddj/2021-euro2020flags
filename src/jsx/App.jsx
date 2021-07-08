import React, {Component} from 'react';
import style from './../styles/styles.less';

// https://www.npmjs.com/package/country-flags-svg
// https://www.npmjs.com/package/round-flags
import { IT } from 'round-flags';

// https://svgcrop.com/
import GB_EN from './../../media/img/uk-en-circle-01.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  componentWillUnMount() {

  }
  // shouldComponentUpdate(nextProps, nextState) {}
  // static getDerivedStateFromProps(props, state) {}
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // static getDerivedStateFromError(error) {}
  // componentDidCatch() {}
  render() {
    return (
      <div className={style.app}>
        <div>
          <img src={IT} alt="Italy" />
          <img src={GB_EN} alt="England" />
        </div>
      </div>
    );
  }
}
export default App;