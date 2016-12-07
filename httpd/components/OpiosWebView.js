import React from '../../node_modules/react';
import Directory from '../modules/Directory';

class OpiosWebView extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

   	var url = this.props.data.url,
		team = this.props.data.team || "";

	url = url.replace("{teamId}", team);

	return (
      <webview className="content-block opios-webview" id={this.props.data.id} src={url}  style={{position: 'absolute', display:'inline-flex', visibility:'hidden', width:'100%', height:'600px'}}></webview>
    );
  }
}

export default OpiosWebView;
