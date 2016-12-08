import React from '../../node_modules/react';
import Directory from '../modules/Directory';

class OpiosModalUpdate extends React.Component {

  constructor(props) {
     super(props);

     this.state = {titleField: '', teamField: ''};
  }

  onSave() {

    var directory = new Directory(),
        serviceName = this.props.data.modalCreate.name,
        serviceProps = directory.getServicePropsByName(serviceName),
        store = this.props.store,
        title = this.state.titleField || serviceProps.title,
        team = this.state.teamField,
        id = this.props.data.modalUpdate.id;

    store.dispatch({
       type: 'SAVE_SERVICE',
       payload: {id: id, title: title, team: team}
    });
    
    $('#updateServiceModal').modal('hide');    
  }


  componentWillReceiveProps(){

    var data = this.props.data.modalUpdate,
        serviceId = data.id,
        serviceData = this.getServiceDataById(this.props.data.contextMenu.serviceId);

    this.setState({
      titleField: serviceData ? serviceData['title'] : '', 
      teamField: serviceData ? serviceData['team'] : ''
    });
  }


  componentWillUpdate(){}


  onTitleChange(event) {

    if(event.target.value.length > 30) return;
    this.setState({titleField: event.target.value});
  }

  onTitleKeyDown(event) {

    if(event.keyCode == 13){
      event.stopPropagation();
      event.preventDefault();
      this.onSave();
    }  
  }

  onTeamChange(event) {

    if(event.target.value.length > 30) return;
    this.setState({teamField: event.target.value});
  }

  onTeamKeyDown(event) {

    if(event.keyCode == 13){
      event.stopPropagation();
      event.preventDefault();
      this.onSave();
    }  
  }  

  getServiceDataById(id) {

    var services = this.props.data.services;

    if(services.length){
      for(var s in services){
        if(services[s]['id'] === id){
          return services[s];
        }
      }
    }

    return null;
  }

  render() {

    var data = this.props.data.modalUpdate,
        serviceId = this.props.data.modalUpdate.id,
        serviceData = this.getServiceDataById(serviceId),
        directory = new Directory(),
        serviceProps = serviceData ? directory.getServicePropsByName(serviceData['name']) : null,
        src = serviceProps ? serviceProps.img : '',
        title = serviceProps ? serviceProps.title : '',
        team = '';

    if(serviceProps && serviceProps.hasTeam === true){
        team = (<input 
          onChange={this.onTeamChange.bind(this)} 
          onKeyDown={this.onTeamKeyDown.bind(this)}
          type="text" 
          className="form-control modalInputText" 
          id="updateServiceModalTeam" 
          placeholder="Enter Team here..."
          value={this.state.teamField}
        >
        </input>);
    }

    return (
      <div>
        <div className="modal fade opios-modal" id="updateServiceModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">

              <div className="modal-body">
                <img width="100px" src={src} />
                <h2>{title}</h2>
                <div className="form">

                  <input 
                    onChange={this.onTitleChange.bind(this)} 
                    onKeyDown={this.onTitleKeyDown.bind(this)}
                    type="text" 
                    className="form-control modalInputText" 
                    id="updateServiceModalName" 
                    placeholder="Enter Name here..."
                    value={this.state.titleField}
                  >
                  </input>

                  {team}

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
                <button onClick={this.onSave.bind(this)} type="button" className="btn btn-primary ">Save</button>
                <button type="button" className="btn btn-default " data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OpiosModalUpdate;
