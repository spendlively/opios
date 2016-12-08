import React from '../../node_modules/react';

class OpiosModalSettings extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

    return (
      <div>
        <div className="modal fade opios-modal" id="settingsModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">

                <div className="modal-body">
                    <div className="float-right">
                        <img width="100px" src="services/opios.svg" />
                        <p className="blue">Edit avatar</p>
                    </div>

                    <h3>Settings</h3>
                    <span className="grey">Ilia Shershnev</span>

                    <div className="group">
                        <h4>Notifications</h4>        
                        <div className="checkbox">
                            <label><input type="checkbox"></input>Desktop Notifications</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox"></input>Play Sound</label>
                        </div>            
                    </div>

                    <div className="group">
                        <h4>General</h4>        
                        <div className="checkbox">
                            <label><input type="checkbox"></input>Auto update (version 0.10.10)</label>
                            <label className="blue">Check for updates</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox"></input>Tray icon</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox"></input>Left tag menu</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox"></input>Right tag menu</label>
                        </div>
                    </div>        

                    <div className="group">
                        <h4>Language</h4>        
                    </div>    

                    <div className="group">
                        <h4>English</h4>        
                        <span className="blue">Change language</span>        
                    </div>            

                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Save</button>
                    <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OpiosModalSettings;
