import React from '../../node_modules/react';
import OpiosMenu from './OpiosMenu';
import OpiosTags from './OpiosTags';
import OpiosContent from './OpiosContent';
import OpiosModalCreate from './OpiosModalCreate';
import OpiosModalUpdate from './OpiosModalUpdate';
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
        <OpiosMenu data={this.props.data} store={this.props.store} />
        <OpiosTags />
        <OpiosContent data={this.props.data} store={this.props.store} />
        <OpiosModalCreate data={this.props.data} store={this.props.store} />
        <OpiosModalUpdate data={this.props.data} store={this.props.store} />
        <OpiosModalSettings />
        <OpiosModalPassword />
        <OpiosContextMenu data={this.props.data} store={this.props.store} />
      </div>
    );
  }
}

export default OpiosContainer;
