import React from '../../node_modules/react';
import OpiosWebView from './OpiosWebView';
import OpiosService from './OpiosService';

class OpiosContent extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

    var webViews = [
            {key: 1, id: 'foo1', src: 'https://messenger.yahoo.com/'},
            {key: 2, id: 'foo2', src: 'https://web.telegram.org/#/im'},
            {key: 3, id: 'foo3', src: 'https://web.whatsapp.com/'},
            {key: 4, id: 'foo4', src: 'https://web.skype.com/'}
        ],
        webViewRows = [],
        services = [
            {src: "services/slack.svg", title: "Slack"},
            {src: "services/skype.svg", title: "Skype"},
            {src: "services/whatsapp.svg", title: "WhatsApp"},
            {src: "services/tweetdeck.svg", title: "Tweetdeck"},
            {src: "services/messenger.svg", title: "Messenger"},
            {src: "services/icq.svg", title: "ICQ"},
            {src: "services/wechat.svg", title: "Wechat"},
            {src: "services/telegram.svg", title: "Telegram"},
            {src: "services/linkedin.svg", title: "Linkedin"},
            {src: "services/facebookpages.svg", title: "Facebook"},
            {src: "services/steamchat.svg", title: "Steamchat"},
            {src: "services/yahoomessenger.svg", title: "Yahoo"},
            {src: "services/dingtalk.svg", title: "Dingtalk"},
            {src: "services/hangouts.svg", title: "Hangouts"},
            {src: "services/hipchat.svg", title: "Hipchat"},
            {src: "services/wire.svg", title: "Wire"},
            {src: "services/googleinbox.svg", title: "Googleinbox"},
            {src: "services/googlegmail.svg", title: "Google Gmail"},
            {src: "services/groupme.svg", title: "Group.me"},
            {src: "services/gitter.svg", title: "Gitter"},
            {src: "services/intercom.svg", title: "Intercom"},
            {src: "services/ciscospark.svg", title: "Ciscospark"},
            {src: "services/mattermost.svg", title: "Mattermost"},
            {src: "services/discord.svg", title: "Discord"},
            {src: "services/hibox.svg", title: "Hibox"},
            {src: "services/outlookdotcom.svg", title: "Outlook"},
            {src: "services/mysms.svg", title: "MySMS"},
            {src: "services/coupleme.svg", title: "Couple.me"},
            {src: "services/zendesk.svg", title: "Zendesk"},
            {src: "services/flowdock.svg", title: "Flowdock"},
            {src: "services/vk.svg", title: "VK"},
            {src: "services/irccloud.svg", title: "Irccloud"},
            {src: "services/grape.svg", title: "Grape"},
            {src: "services/chatwork.svg", title: "Chatwork"},
            {src: "services/rocketchat.svg", title: "Rocketchat"}
        ],
        servicesRows = [];

    if(services.length){
        for(var d in services){
            servicesRows.push(<OpiosService data={services[d]} key={services[d].title} />);
        }
    }

    if(webViews.length){
        for(var d in webViews){
            webViewRows.push(<OpiosWebView data={webViews[d]} key={webViews[d].key} />);
        }
    }    

    return (
      <div>
        <article id="main-article">
            <div id="main-article-body" className="service-body">

                {webViewRows}

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


                            {servicesRows}


                        </div>
                    </div>
                </div>            
            </div>
        </article>
      </div>
    );
  }
}

export default OpiosContent;
