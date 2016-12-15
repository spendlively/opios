import React from '../../node_modules/react';

class OpiosModalPassword extends React.Component {

  constructor(props) {
	   super(props);

     this.count = 6;
     this.pass = new Array(this.count);
     this.inputIdTail = '-opios-code-digit';
     this.password = '123456';
  }

  onChange(event) {

    var id = event.target.id,
        index = parseInt(id.charAt(0)),
        value = event.target.value,
        el = document.getElementById((index + 1) + this.inputIdTail);

    this.pass[index] = value;
    if(index === this.count){
        this.enterPass(this.pass.join(''));
    }
    else if(el){
      el.focus();
    }
  }

  enterPass(password) {

    if(password === this.password){
      $('#codeModal').modal('hide');
    }
    this.resetInputs();
  }

  resetInputs() {

    $('input.opios-password-input').val("");
    var el = document.getElementById(1 + this.inputIdTail);
    if(el) el.focus();
  }

  onFocus(event) {
    event.target.value="";
  }

  render() {

    var l12n = this.props.data.l12n.passwordWindow,
        inputs = [];

    for(var i = 1; i <= this.count; i++){
      var id = i + this.inputIdTail;
      inputs.push(<div key={i} className="opios-code-digit"><input onFocus={this.onFocus.bind(this)} id={id} onChange={this.onChange.bind(this)} className="opios-password-input" type="password" maxLength="1" size="1"></input></div>);
    }
    
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
                            {inputs}
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
