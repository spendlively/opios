import React from '../../node_modules/react';

class OpiosModalSettings extends React.Component {

  constructor(props) {
	   super(props);
  }

  changeLang (code) {

    this.props.store.dispatch({
       type: 'CHANGE_LANG',
       payload: {lang: code}
    });    
  }

  render() {

    var l12n = this.props.data.l12n.settingsWindow,
        langs = [],
        currentLang = '';


    if(l12n.languages.length){
        for(var l in l12n.languages){

            langs.push(
                <li key={l12n.languages[l]['code']} onClick={this.changeLang.bind(this, l12n.languages[l]['code'])}>
                    <a href="#">{l12n.languages[l]['name']}</a>
                </li>
            );

            if(l12n.languages[l]['code'] === this.props.data.language){
                currentLang = l12n.languages[l]['name'];
            }
        }
    }


    return (
      <div>
        <div className="modal fade opios-modal" id="settingsModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">

                <div className="modal-body">
                    <div className="float-right">
                        <img width="100px" src="services/opios.svg" />
                        <p className="blue">{l12n.editAvatar}</p>
                    </div>

                    <h3>{l12n.settings}</h3>
                    <span className="grey">Ilia Shershnev</span>

                    <div className="group">
                        <h4>{l12n.notifications}</h4>        
                        <div className="checkbox">
                            <label><input type="checkbox"></input>{l12n.desktopNotifications}</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox"></input>{l12n.playSound}</label>
                        </div>            
                    </div>

                    <div className="group">
                        <h4>{l12n.general}</h4>        
                        <div className="checkbox">
                            <label><input type="checkbox"></input>{l12n.autoUpdate}</label>
                            <label className="blue">{l12n.checkForUpadtes}</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox"></input>{l12n.trayIcon}</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox"></input>{l12n.leftTagMenu}</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox"></input>{l12n.rightTagMenu}</label>
                        </div>
                    </div>        

                    <div className="group">
                        <h4>{l12n.language}</h4>        
                    </div>    


                    <div className="dropdown">
                        <span className="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            {currentLang}
                        </span>
                        <span className="caret"></span>
                      
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        {langs}
                      </ul>
                    </div>    


                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">{l12n.save}</button>
                    <button type="button" className="btn btn-default" data-dismiss="modal">{l12n.cancel}</button>
                </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OpiosModalSettings;
