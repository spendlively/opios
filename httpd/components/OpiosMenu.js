import React from '../../node_modules/react';
import OpiosMenuItem from './OpiosMenuItem';

class OpiosMenu extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

    var data = [
        {key: 1, src: "services/messenger.svg",text: "Messenger",badge: 1},
        {key: 2, src: "services/telegram.svg",text: "Telegram"},
        {key: 3, src: "services/whatsapp.svg",text: "WhatsApp",badge: 4},
        {key: 4, src: "services/skype.svg",text: "Skype"},
    ],
    rows = [];

    if(data.length){
        for(var d in data){
            rows.push(<OpiosMenuItem data={data[d]} key={data[d].key} />);
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
                    <li className="tnb-li service active-btn">
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
