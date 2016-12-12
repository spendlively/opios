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
        team = '',
        l12n = this.props.data.l12n.updateServiceWindow;

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
                    <label><input type="checkbox"></input>{l12n.desktopNotifications}</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox"></input>{l12n.localPin}</label>
                    <label className="red">{l12n.idle}</label>
                    <label className="blue">{l12n.changePin}</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox"></input>{l12n.appShortcut}</label>
                    <label className="grey">{l12n.cmd}</label>
                    <label className="grey">{l12n.changeShortcut}</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox"></input>{l12n.standartImg}</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox"></input>{l12n.color}</label>
                    <label className="blue">{l12n.editImage}</label>
                  </div>
                  <div className="checkbox">
                    <label><input type="checkbox"></input>{l12n.mainTag}</label>
                    <label className="blue">{l12n.changeTag}</label>
                  </div>
                  <div className="checkbox">
                    <label className="grey"><input type="checkbox"></input>{l12n.delete}</label>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button onClick={this.onSave.bind(this)} type="button" className="btn btn-primary ">{l12n.save}</button>
                <button type="button" className="btn btn-default " data-dismiss="modal">{l12n.cancel}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OpiosModalUpdate;
