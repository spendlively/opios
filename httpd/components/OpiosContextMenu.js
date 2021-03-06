import React from '../../node_modules/react';

class OpiosContextMenu extends React.Component {

  constructor(props) {
	   super(props);
  }

  onUpdate() {

    var store = this.props.store;

    store.dispatch({
       type: 'UPDATE_SERVICE',
       payload: {id: this.props.data.contextMenu.serviceId}
    });

    $('#updateServiceModal').modal();
  }

  onDelete() {

    var store = this.props.store;

    store.dispatch({
       type: 'DELETE_SERVICE',
       payload: {id: this.props.data.contextMenu.serviceId}
    });
  }

  render() {

    var l12n = this.props.data.l12n.serviceContextMenu;

    return (
      <div>
        <div id="contextMenu" className="dropdown clearfix">
            <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu" style={{display:'block',position:'static',marginBottom:'5px'}}>
                <li onClick={this.onUpdate.bind(this)}><a tabIndex="-1" href="#">{l12n.edit}</a></li>
                <li onClick={this.onDelete.bind(this)}><a tabIndex="-1" href="#">{l12n.delete}</a></li>
            </ul>
        </div>
      </div>
    );
  }
}

export default OpiosContextMenu;


/*
        <div id="contextMenu" className="dropdown clearfix">
            <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu" style={{display:'block',position:'static',marginBottom:'5px'}}>
                <li><a tabIndex="-1" href="#"><div className="red-square"></div>Highlight Color</a></li>
                <li className="divider"></li>
                <li><a tabIndex="-1" href="#">Add to favorite</a></li>
                <li><a tabIndex="-1" href="#">Remove from Recents</a></li>
                <li><a tabIndex="-1" href="#">Add to Dashboard</a></li>
                <li><a tabIndex="-1" href="#">Copy Project...</a></li>
                <li><a tabIndex="-1" href="#">Archive Project</a></li>
                <li><a tabIndex="-1" href="#">Delete Project</a></li>
            </ul>
        </div>
        */