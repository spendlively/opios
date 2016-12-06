import React from '../../node_modules/react';
import SmartResizer from '../modules/SmartResizer';

class OpiosMenuItem extends React.Component {

  constructor(props) {
	   super(props);
  }

  onContextMenu(e) {

    var store = this.props.store,
        id = this.props.data.id;

    store.dispatch({
       type: 'OPEN_CONTEXT_MENU',
       payload: {id: id}
    });

    //Контекстное меню сервиса
    var $contextMenu = $("#contextMenu");

    $contextMenu.css({
      display: "block",
      left: e.nativeEvent.pageX,
      top: e.nativeEvent.pageY
    });

    $('body').click(function() {
      $contextMenu.hide();
    });    
  }

  clickOnTabHandler(tabId){

      var me = this,
        resizer = new SmartResizer(),
        id = this.props.data.id;

      $('.tnb-li.service').removeClass('active-btn');
      $('#' + tabId).addClass('active-btn');

      $('.content-block.opios-webview').css('visibility', 'hidden').css('position', 'absolute').css('top', '0px');
      $('#services-list').css('display', 'none');

      $('#' + id).css('position', 'inherit').css('visibility', 'visible');

      resizer.resize();
  }

  render() {

  	var badges = this.props.data.badges ? <span className="badge badge-active">{this.props.data.badges}</span> : '',
        id = 'tab-' + this.props.data.id;

    return (
        <a href="#" className="tnb-li-a">
            <li id={id} className="tnb-li service" onClick={this.clickOnTabHandler.bind(this, id)} onContextMenu={this.onContextMenu.bind(this)} >
                <span className="tnb-logo"><img src={this.props.data.src} /></span>
                {badges}
                <span className="tnb-text">{this.props.data.text}</span>
            </li>
        </a>
    );
  }
}

export default OpiosMenuItem;

/*
onClick={this.clickOnTabHandler.bind(this, id)}
*/