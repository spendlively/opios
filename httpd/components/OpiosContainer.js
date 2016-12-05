import React from '../../node_modules/react';
import OpiosMenu from './OpiosMenu';
import OpiosTags from './OpiosTags';
import OpiosContent from './OpiosContent';
import OpiosModalCreate from './OpiosModalCreate';
import OpiosModalSettings from './OpiosModalSettings';
import OpiosModalPassword from './OpiosModalPassword';
import OpiosContextMenu from './OpiosContextMenu';

class OpiosContainer extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

    return (
      <div>
        <OpiosMenu data={this.props.data} />
        <OpiosTags />
        <OpiosContent data={this.props.data} />
        <OpiosModalCreate />
        <OpiosModalSettings />
        <OpiosModalPassword />
        <OpiosContextMenu />
      </div>
    );
  }
}

export default OpiosContainer;
