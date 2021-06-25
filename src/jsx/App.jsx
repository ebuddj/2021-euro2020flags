import React, {Component} from 'react';
import style from './../styles/styles.less';

// https://www.npmjs.com/package/country-flags-svg
// https://www.npmjs.com/package/round-flags
import { AT,BE,CH,DE,DK,ES,FR,HR,IT,PT,SE,NL,CZ,UA } from 'round-flags';

// https://svgcrop.com/
import GB_EN from './../../media/img/uk-en-circle-01.png';
import GB_WL from './../../media/img/uk-wl-circle-01.png';

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
          <img src={AT} alt="Austria" />
          <img src={BE} alt="Belgium" />
          <img src={PT} alt="Portugal" />
          <img src={HR} alt="Croatia" />
          <img src={ES} alt="Spain" />
          <img src={FR} alt="France" />
          <img src={CH} alt="Switzerland" />
          <img src={GB_WL} alt="Wales" />
          <img src={DK} alt="Denmark" />
          <img src={NL} alt="Netherlands" />
          <img src={CZ} alt="Czechia" />
          <img src={GB_EN} alt="England" />
          <img src={DE} alt="Germany" />
          <img src={SE} alt="Sweden" />
          <img src={UA} alt="Ukraine" />
        </div>
      </div>
    );
  }
}
export default App;