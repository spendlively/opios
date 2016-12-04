import React from '../../node_modules/react';

class OpiosMenuHome extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

    return (
        <a href="#" className="tnb-li-a" id='opios-home-btn'>
            <li className="tnb-li home">
                <span className="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
            </li>
        </a>
    );
  }
}

export default OpiosMenuHome;
