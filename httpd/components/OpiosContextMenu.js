import React from '../../node_modules/react';

class OpiosContextMenu extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

    return (
      <div>
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
      </div>
    );
  }
}

export default OpiosContextMenu;
