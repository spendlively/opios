import React from '../../node_modules/react';
import Directory from '../modules/Directory';

class OpiosWebView extends React.Component {

  constructor(props) {
	   super(props);
  }

  componentDidMount() {

    var me = this,
      wv = document.getElementById(this.props.wvProps.id);

    //Отображение badges c количеством новых уведомлений
    // if(serviceTemplate['useTitle'] === true){
      wv.addEventListener('page-title-updated', function(event){
        var count = me.findNewMessagesInTitle(event.title) || 0,
            store = me.props.store;

        store.dispatch({
           type: 'UPDATE_BADGES',
           payload: {id: me.props.wvProps.id, count: count}
        });
      });
      // }

      //Открытие ссылки в браузере по умолчанию
      wv.addEventListener('new-window', function(e){
        e.preventDefault();
        require('electron').shell.openExternal(e.url);
      });
  }

  findNewMessagesInTitle (title){

    var re = /\(([\d]+)\)/ui;
    var results = re.exec(title) || [];

    if(results[1]){
      return results[1];
    }

    return null;
  }

  render() {

   	var url = this.props.wvProps.url,
		team = this.props.wvProps.team || "";

	url = url.replace("{teamId}", team);

	return (
      <webview className="content-block opios-webview" id={this.props.wvProps.id} src={url}  style={{position: 'absolute', display:'inline-flex', visibility:'hidden', width:'100%', height:'600px'}}></webview>
    );
  }
}

export default OpiosWebView;
