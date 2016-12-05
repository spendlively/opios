import React from '../../node_modules/react';
import OpiosMenuItem from './OpiosMenuItem';
import Directory from '../modules/Directory';
import SmartResizer from '../modules/SmartResizer';

class OpiosMenu extends React.Component {

  constructor(props) {
	   super(props);
  }

  clickOnPlusHandler(){

    var me = this,
        resizer = new SmartResizer();

      $('.tnb-li.service').removeClass('active-btn');
      $('#opios-plus-btn').addClass('active-btn');

      $('.content-block.opios-webview').css('visibility', 'hidden').css('position', 'absolute').css('top', '0px');
      $('#services-list').css('display', 'none');

      $('#services-list').css('display', 'block');

      resizer.resize();
  }

  render() {

    var services = this.props.data.services,
        directory = new Directory(),
        rows = [];

    // var data = [
    //     {key: 1, src: "services/messenger.svg",text: "Messenger",badge: 1},
    //     {key: 2, src: "services/telegram.svg",text: "Telegram"},
    //     {key: 3, src: "services/whatsapp.svg",text: "WhatsApp",badge: 4},
    //     {key: 4, src: "services/skype.svg",text: "Skype"},
    // ],
    // rows = [];

// console.log('menu', this.props.data.services)

    if(services.length){
        for(var d in services){
            var serviceProps = directory.getServicePropsByName(services[d]['name']),
                data = {
                    id: services[d]['id'], 
                    src: serviceProps['img'], 
                    text: services[d]['text'], 
                    badges: services[d]['badges']
                };

            rows.push(<OpiosMenuItem data={data} key={services[d]['id']} />);
        }
    }

    return (
      <div>
        <nav className="tnb">
          <div>

            <ul className="tnb">
                <a href="#" className="tnb-li-a" id='opios-home-btn'>
                    <li className="tnb-li home">
                        <span className="glyphicon glyphicon-align-justify"></span>
                    </li>
                </a>                



                {rows}



                
                <a href="#" className="tnb-li-a">
                    <li id="opios-plus-btn" className="tnb-li service active-btn" onClick={this.clickOnPlusHandler.bind(this)}>
                        <span className="tnb-logo-new"><img src="services/plus.svg" /></span>
                    </li>
                </a>


                <a href="#">
                    <li className="tnb-li-right" id="opios-right-logo">
                        <span className="tnb-logo opios-logo"><img src="services/opios.png" /></span>
                    </li>
                </a>
                <a href="#">
                    <li className="tnb-li-right" id="opios-phone">
                        <span className="tnb-logo"><img src="services/phone.svg" /></span>
                    </li>
                </a>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default OpiosMenu;
