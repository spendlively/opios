import React from '../../node_modules/react';

class OpiosContent extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

    return (
      <div>
        <article id="main-article">
            <div id="main-article-body" className="service-body">
              <webview className="content-block opios-webview" id="foo1" src="https://messenger.yahoo.com/"  style={{position: 'absolute', display:'inline-flex', visibility:'hidden', width:'100%', height:'600px'}}></webview>
              <webview className="content-block opios-webview" id="foo2" src="https://web.telegram.org/#/im" style={{position: 'absolute', display:'inline-flex', visibility:'hidden', width:'100%', height:'600px'}}></webview>
              <webview className="content-block opios-webview" id="foo3" src="https://web.whatsapp.com/"     style={{position: 'absolute', display:'inline-flex', visibility:'hidden', width:'100%', height:'600px'}}></webview>
              <webview className="content-block opios-webview" id="foo4" src="https://web.skype.com/"        style={{position: 'absolute', display:'inline-flex', visibility:'hidden', width:'100%', height:'600px'}}></webview>
            </div>

        <div className="content-block" id="services-list" style={{display:'block', width:'100%'}}>
            <div className="services-list">
                <h1>Add New Service</h1>
                <ul>
                    <li className="services-list-li active"><a href="#">All</a></li>
                    <li className="services-list-delimitter">/</li>
                    <li className="services-list-li"><a href="#">Messengers</a></li>
                    <li className="services-list-delimitter">/</li>
                    <li className="services-list-li"><a href="#">E-mail</a></li>
                    <li className="services-list-delimitter">/</li>
                    <li className="services-list-li"><a href="#">Social Networks</a></li>
                    <li className="services-list-delimitter">/</li>
                    <li className="services-list-li"><a href="#">Data Storage</a></li>
                    <li className="services-list-delimitter">/</li>
                    <li className="services-list-li"><a href="#">Other</a></li>
                </ul>

                <div className="service-icons">

                    <div className="service-img-container"><img src="services/slack.svg" alt=""></img><p>Slack</p></div>
                    <div className="service-img-container"><img src="services/skype.svg" alt=""></img><p>Skype</p></div>
                    <div className="service-img-container"><img src="services/whatsapp.svg" alt=""></img><p>WhatsApp</p></div>
                    <div className="service-img-container"><img src="services/tweetdeck.svg" alt=""></img><p>Tweetdeck</p></div>
                    <div className="service-img-container"><img src="services/messenger.svg" alt=""></img><p>Messenger</p></div>
                    <div className="service-img-container"><img src="services/icq.svg" alt=""></img><p>ICQ</p></div>
                    <div className="service-img-container"><img src="services/wechat.svg" alt=""></img><p>Wechat</p></div>
                    <div className="service-img-container"><img src="services/telegram.svg" alt=""></img><p>Telegram</p></div>
                    <div className="service-img-container"><img src="services/linkedin.svg" alt=""></img><p>Linkedin</p></div>
                    <div className="service-img-container"><img src="services/facebookpages.svg" alt=""></img><p>Facebook</p></div>
                    <div className="service-img-container"><img src="services/steamchat.svg" alt=""></img><p>Steamchat</p></div>
                    <div className="service-img-container"><img src="services/yahoomessenger.svg" alt=""></img><p>Yahoo</p></div>
                    <div className="service-img-container"><img src="services/dingtalk.svg" alt=""></img><p>Dingtalk</p></div>
                    <div className="service-img-container"><img src="services/hangouts.svg" alt=""></img><p>Hangouts</p></div>
                    <div className="service-img-container"><img src="services/hipchat.svg" alt=""></img><p>Hipchat</p></div>
                    
                    <div className="service-img-container"><img src="services/wire.svg" alt=""></img><p>Wire</p></div>
                    <div className="service-img-container"><img src="services/googleinbox.svg" alt=""></img><p>Googleinbox</p></div>
                    <div className="service-img-container"><img src="services/googlegmail.svg" alt=""></img><p>Google Gmail</p></div>
                    <div className="service-img-container"><img src="services/groupme.svg" alt=""></img><p>Group.me</p></div>
                    <div className="service-img-container"><img src="services/gitter.svg" alt=""></img><p>Gitter</p></div>
                    <div className="service-img-container"><img src="services/intercom.svg" alt=""></img><p>Intercom</p></div>
                    <div className="service-img-container"><img src="services/ciscospark.svg" alt=""></img><p>Ciscospark</p></div>
                    <div className="service-img-container"><img src="services/mattermost.svg" alt=""></img><p>Mattermost</p></div>
                    <div className="service-img-container"><img src="services/discord.svg" alt=""></img><p>Discord</p></div>
                    <div className="service-img-container"><img src="services/hibox.svg" alt=""></img><p>Hibox</p></div>
                    <div className="service-img-container"><img src="services/outlookdotcom.svg" alt=""></img><p>Outlook</p></div>
                    <div className="service-img-container"><img src="services/mysms.svg" alt=""></img><p>MySMS</p></div>
                    <div className="service-img-container"><img src="services/coupleme.svg" alt=""></img><p>Couple.me</p></div>
                    <div className="service-img-container"><img src="services/zendesk.svg" alt=""></img><p>Zendesk</p></div>
                    <div className="service-img-container"><img src="services/flowdock.svg" alt=""></img><p>Flowdock</p></div>
                    <div className="service-img-container"><img src="services/vk.svg" alt=""></img><p>VK</p></div>
                    <div className="service-img-container"><img src="services/irccloud.svg" alt=""></img><p>Irccloud</p></div>
                    <div className="service-img-container"><img src="services/grape.svg" alt=""></img><p>Grape</p></div>
                    <div className="service-img-container"><img src="services/chatwork.svg" alt=""></img><p>Chatwork</p></div>
                    <div className="service-img-container"><img src="services/rocketchat.svg" alt=""></img><p>Rocketchat</p></div>

                </div>
            </div>
        </div>            
        </article>
      </div>
    );
  }
}

export default OpiosContent;
