import React from '../../node_modules/react';

class OpiosService extends React.Component {

  constructor(props) {
	   super(props);
  }

  onClickHandler(){

  	var store = this.props.store;

	store.dispatch({
	    type: 'OPEN_CREATE_SERVICE_WINDOW',
	    payload: {name: this.props.data.name}
	});

	// $('.service-img-container').click(function(){
	$('#addServiceModal').modal();
	// });
  }

  render() {

    return (
      <div className="service-img-container" onClick={this.onClickHandler.bind(this)} ><img src={this.props.data.img} alt=""></img><p>{this.props.data.title}</p></div>
    );
  }
}

export default OpiosService;
