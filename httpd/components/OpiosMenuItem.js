import React from '../../node_modules/react';

class OpiosMenuItem extends React.Component {

  constructor(props) {
	   super(props);
  }

  itemTemplates: {

  }

  render() {

  	var badge = this.props.data.badge ? <span className="badge badge-active">{this.props.data.badge}</span> : '';

    return (
        <a href="#" className="tnb-li-a">
            <li className="tnb-li service">
                <span className="tnb-logo"><img src={this.props.data.src} /></span>
                {badge}
                <span className="tnb-text">{this.props.data.text}</span>
            </li>
        </a>
    );
  }
}

export default OpiosMenuItem;
