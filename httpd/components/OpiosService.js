import React from '../../node_modules/react';

class OpiosService extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

    return (
      <div className="service-img-container"><img src={this.props.data.img} alt=""></img><p>{this.props.data.title}</p></div>
    );
  }
}

export default OpiosService;
