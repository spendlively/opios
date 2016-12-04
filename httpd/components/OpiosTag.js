import React from '../../node_modules/react';

class OpiosTag extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

    var cls = "aside-tag " + this.props.data.colorCls;

    return (
      <div className={cls}>{this.props.data.title}</div>
    );
  }
}

export default OpiosTag;
