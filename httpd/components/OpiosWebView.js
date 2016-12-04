import React from '../../node_modules/react';

class OpiosWebView extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

    return (
      <webview className="content-block opios-webview" id={this.props.data.id} src={this.props.data.src}  style={{position: 'absolute', display:'inline-flex', visibility:'hidden', width:'100%', height:'600px'}}></webview>
    );
  }
}

export default OpiosWebView;
