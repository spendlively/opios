import React from '../../node_modules/react';

class OpiosModalPassword extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

    var l12n = this.props.data.l12n.passwordWindow;
    
    return (
      <div>
        <div className="modal fade opios-modal" id="codeModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel1">
          <div className="modal-dialog" role="document">
            <div className="modal-content">

                <div className="modal-body">
                    <div className="modal-body-center">
                        <div className="opios-code-header">
                            <img width="95px" src="services/opios.svg" />
                            <p className="code-header-title">{l12n.title}</p>
                        </div>
                        <div className="opios-code-digits">
                            <div className="opios-code-digit"></div>
                            <div className="opios-code-digit"></div>
                            <div className="opios-code-digit"></div>
                            <div className="opios-code-digit"></div>
                            <div className="opios-code-digit"></div>
                            <div className="opios-code-digit"></div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">{l12n.startNew}</button>
                </div>
            </div>
          </div>  
        </div>
      </div>
    );
  }
}

export default OpiosModalPassword;
