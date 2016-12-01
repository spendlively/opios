import React from '../../node_modules/react';

class OpiosModalPassword extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

    return (
      <div>
        <div className="modal fade opios-modal" id="codeModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel1">
          <div className="modal-dialog" role="document">
            <div className="modal-content">

                <div className="close-wrapper">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                
                <div className="modal-body">
                    <div className="modal-body-center">
                        <div className="opios-code-header">
                            <img width="95px" src="services/opios.svg" />
                            <p className="code-header-title">OPIOS ACCESS CODE</p>
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
                    <button type="button" className="btn btn-default" data-dismiss="modal">Start New</button>
                </div>
            </div>
          </div>  
        </div>
      </div>
    );
  }
}

export default OpiosModalPassword;
