var SettingsBlock = React.createClass({

  	getInitialState: function() {

		var l12n = app.localization,
			settings = l12n.getData('settingsBlock');

		settings.emailValue = app.config.get('email');

    	return settings;
  	},

  	componentDidMount: function() {
  		
  		app.componentsObserver.registerComponent('settingsBlock', this);
  	},

  	getDefaultProps: function(){
  		return {
  			subscription: app.config.get('subscription'),
  			personalUse: app.config.get('personalUse'),
  			commercialUse: app.config.get('commercialUse'),
  			nonProfitUse: app.config.get('nonProfitUse'),
  			leaveRunning: app.config.get('leaveRunning'),
  			launchOnStart: app.config.get('launchOnStart')
  		};
  	},

  	handleChangeCb: function(event){

  		var target = event.target,
  			name = target.name,
  			checked = target.checked;

  		if(name){
  			app.config.save(name, checked);

        app.config.setAutoLaunch(checked);
  		}
  	},

  	handleChangeEmail: function(event){

  		var target = event.target,
  			value = target.value;

		this.setState({emailValue: value});
		app.config.save("email", value);
  	},

  	handleChangeLang: function(event){
  		var target = event.target,
  			value = target.value,
  			lang = null,
  			code = '';

  		if(this.state.languages.length){
  			for(var l in this.state.languages){
				lang = this.state.languages[l];
				if(parseInt(lang.id) == parseInt(value)){
					code = lang.code;
					break;
				}
  			}
  		}
  		if(code){
  			app.config.save('language', code);
  			app.localization.loadLang(code);
  		}
  	},

	render: function(){
		return (
			<div>
                <h2 id="content-settings">{this.state.title}</h2>
                <div className="settings-block">
                    <h3>{this.state.account}</h3>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">{this.state.email}</label>
                        <input 
                        	value={this.state.emailValue}
                        	onChange={this.handleChangeEmail}
                        	type="email" 
                        	className="form-control" 
                        	id="exampleInputEmail1" 
                        	placeholder={this.state.email} 
                    	/>
                    </div>
                    <div className="checkbox">
                        <label>
        					<input 
    								defaultChecked={this.props.subscription}
    								onChange={this.handleChangeCb}
    								name="subscription"
    								type="checkbox" 
    							/>
                            {this.state.subscribeText}
                        </label>
                    </div>
                    <p>{this.state.useText}</p>
                    <div className="checkbox">
                        <label>
        					<input 
    								defaultChecked={this.props.personalUse}
    								onChange={this.handleChangeCb}
    								name="personalUse"
    								type="checkbox" 
    							/>
                        	{this.state.personalText}
                    	</label>
                    </div>
                    <div className="checkbox">
                        <label>
        					<input 
								defaultChecked={this.props.commercialUse}
								onChange={this.handleChangeCb}
								name="commercialUse"
								type="checkbox" 
							/>
                        	{this.state.commercialText}
                    	</label>
                    </div>
                    <div className="checkbox">
                        <label>
        					<input 
								defaultChecked={this.props.nonProfitUse}
								onChange={this.handleChangeCb}
								name="nonProfitUse"
								type="checkbox" 
							/>
                        	{this.state.nonProfitText}
                    	</label>
                    </div>
                    <h3>{this.state.app}</h3>
                    <p>{this.state.general}</p>
                    <div className="checkbox">
                        <label>
        					<input 
								defaultChecked={this.props.leaveRunning}
								onChange={this.handleChangeCb}
								name="leaveRunning"
								type="checkbox" 
							/>
                        	{this.state.leaveRunningText}
                    	</label>
                    </div>
                    <div className="checkbox">
                        <label>
        					<input 
								defaultChecked={this.props.launchOnStart}
								onChange={this.handleChangeCb}
								name="launchOnStart"
								type="checkbox" 
							/>
                        	{this.state.launchText}
                        </label>
                    </div>
                    <p>{this.state.language}</p>
						{this.getOptions()}
                    <h3>{this.state.cache}</h3>
                    <button type="button" className="btn btn-default">{this.state.clearCache}</button>
                </div> 
		    </div>
		);
	},

  	getOptions: function(){

		var langCode = app.config.get('language'),
			selectedLang = '';

		var options = this.state.languages.map(function(opt){
			if(opt.code === langCode){
				selectedLang = opt.id;
			}
			return (<option key={opt.id} value={opt.id}>{opt.value}</option>)
		});

  		return (
         	<select 
         		value={selectedLang} 
         		onChange={this.handleChangeLang}
         		className="form-control"
     		>
         		{options}
            </select>
		);
  	}
});

ReactDOM.render(
  <SettingsBlock />,
  document.getElementById('settings-block')
);
