import React from '../../node_modules/react';
import Directory from '../modules/Directory';

class OpiosModalCreate extends React.Component {

  constructor(props) {
	   super(props);
  }

  onSave(serviceName, title) {

    var store = this.props.store;

    store.dispatch({
       type: 'ADD_SERVICE',
       payload: {service: serviceName, text: title}
    });
    
    $('#addServiceModal').modal('hide');
  }

  render() {

    var directory = new Directory(),
        data = this.props.data.modalCreate,
        serviceName = data.service,
        serviceProps = directory.getServicePropsByName(serviceName),
        src = serviceProps ? serviceProps.img : '',
        title = serviceProps ? serviceProps.title : '';

    return (
      <div>
        <div className="modal fade opios-modal" id="addServiceModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">

              <div className="modal-body">
                <img width="100px" src={src} />
                <h2>{title}</h2>
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
                <button onClick={this.onSave.bind(this, serviceName, title)} type="button" className="btn btn-primary ">Save</button>
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
