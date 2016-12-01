import React from '../../node_modules/react';

class OpiosModalCreate extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

    return (
      <div>
        <div className="modal fade opios-modal" id="addServiceModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">

                <div className="close-wrapper">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                
              <div className="modal-body">
                <img width="100px" src="services/messenger.svg" />
                <h2>Messenger</h2>
                <div className="form">

                  <div className="checkbox">
                    <label><input type="checkbox"></input>Desktop Notifications</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox"></input>Local PIN password</label>
                    <label className="red">10 min idle</label>
                    <label className="blue">Change PIN activation time</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox"></input>Application ShortCut</label>
                    <label className="grey">cmd-1</label>
                    <label className="grey">Change ShortCut</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox"></input>Standart image</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox"></input>Color $ Short name image</label>
                    <label className="blue">Edit image color</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox"></input>Main Tag</label>
                    <label className="blue">Change tag</label>
                  </div>
                  <div className="checkbox">
                    <label className="grey"><input type="checkbox"></input>Delete Application</label>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary ">Save</button>
                <button type="button" className="btn btn-default " data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OpiosModalCreate;
