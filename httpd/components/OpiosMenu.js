import React from '../../node_modules/react';

class OpiosMenu extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

    return (
      <div>
        <nav className="tnb">
          <div>

            <ul className="tnb">
                <a href="#" className="tnb-li-a" id='opios-home-btn'>
                    <li className="tnb-li home">
                        <span className="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
                </li>
                </a>
                <a href="#" className="tnb-li-a">
                    <li className="tnb-li service">
                        <span className="tnb-logo"><img src="services/messenger.svg" /></span>
                        <span className="badge badge-active">1</span>
                        <span className="tnb-text">Messenger</span>
                    </li>
                </a>
                <a href="#" className="tnb-li-a">
                    <li className="tnb-li service">
                        <span className="tnb-logo"><img src="services/telegram.svg" /></span>
                        <span className="tnb-text">Telegram</span>
                    </li>
                </a>
                <a href="#" className="tnb-li-a">
                    <li className="tnb-li service">
                        <span className="tnb-logo"><img src="services/whatsapp.svg" /></span>
                        <span className="badge badge-active">4</span>
                        <span className="tnb-text">WhatsApp</span>
                    </li>
                </a>
                <a href="#" className="tnb-li-a">
                    <li className="tnb-li service">
                        <span className="tnb-logo"><img src="services/skype.svg" /></span>
                        <span className="tnb-text">Skype</span>
                    </li>
                </a>
                <a href="#" className="tnb-li-a">
                    <li className="tnb-li service active-btn">
                        <span className="tnb-logo-new"><img src="services/plus.svg" /></span>
                    </li>
                </a>

        <li className="tnb-li-right" id="opios-right-logo">
            <span className="tnb-logo opios-logo"><img src="services/opios.png" /></span>
        </li>
        <li className="tnb-li-right" id="opios-phone">
            <span className="tnb-logo"><img src="services/phone.svg" /></span>
        </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default OpiosMenu;
