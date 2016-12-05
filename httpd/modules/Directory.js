function Directory(){}

Directory.prototype.getServicePropsByName = function(name){

	var services = this.getAvailableServices();

	if(services.length){
		for(var s in services){
			if(services[s]['name'] === name){
				return services[s];
			}
		}
	}

	return null;
}

Directory.prototype.getAvailableServices = function(){

	return [
		{
		  "img": "services/slack.svg",
		  "title": "Slack",
		  "name": "slack",
		  "url": "https://{teamId}.slack.com",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": true
		},
		{
		  "img": "services/messenger.svg",
		  "title": "Messenger",
		  "name": "messenger",
		  "url": "https://www.messenger.com/login/",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/whatsapp.svg",
		  "title": "WhatsApp",
		  "name": "whatsapp",
		  "url": "https://web.whatsapp.com/",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/telegram.svg",
		  "title": "Telegram",
		  "name": "telegram",
		  "url": "https://web.telegram.org/#/im",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/skype.svg",
		  "title": "Skype",
		  "name": "skype",
		  "url": "https://web.skype.com/",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/wechat.svg",
		  "title": "WeChat",
		  "name": "wechat",
		  "url": "https://web.wechat.com/?lang=en_US",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/hipchat.svg",
		  "title": "HipChat",
		  "name": "hipchat",
		  "url": "https://www.hipchat.com/",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/chatwork.svg",
		  "title": "ChatWork",
		  "name": "chatwork",
		  "url": "https://www.chatwork.com/login.php",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/flowdock.svg",
		  "title": "Flowdock",
		  "name": "flowdock",
		  "url": "https://www.flowdock.com/login",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/hangouts.svg",
		  "title": "Hangouts",
		  "name": "hangouts",
		  "url": "https://hangouts.google.com/",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/groupme.svg",
		  "title": "GroupMe",
		  "name": "groupme",
		  "url": "https://web.groupme.com",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/rocketchat.svg",
		  "title": "Rocket Chat",
		  "name": "rocketchat",
		  "url": "https://rocket.chat/",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/mattermost.svg",
		  "title": "Mattermost",
		  "name": "mattermost",
		  "url": "https://www.mattermost.org/",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/grape.svg",
		  "title": "Grape",
		  "name": "grape",
		  "url": "https://{teamId}.chatgrape.com",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": true
		},
		{
		  "img": "services/gitter.svg",
		  "title": "Gitter",
		  "name": "gitter",
		  "url": "https://gitter.im/login/github?action=login",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/tweetdeck.svg",
		  "title": "TweetDeck",
		  "name": "tweetdeck",
		  "url": "https://tweetdeck.twitter.com",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/dingtalk.svg",
		  "title": "DingTalk",
		  "name": "dingtalk",
		  "url": "https://im.dingtalk.com/",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/steamchat.svg",
		  "title": "Steam Chat",
		  "name": "steamchat",
		  "url": "https://steamcommunity.com/chat",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/discord.svg",
		  "title": "Discord",
		  "name": "discord",
		  "url": "https://discordapp.com/login",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/mysms.svg",
		  "title": "MySMS",
		  "name": "mysms",
		  "url": "https://app.mysms.com",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/googleinbox.svg",
		  "title": "Inbox by Gmail",
		  "name": "inboxbygmail",
		  "url": "https://inbox.google.com/",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/googlegmail.svg",
		  "title": "Gmail",
		  "name": "gmail",
		  "url": "https://gmail.google.com/",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/outlookdotcom.svg",
		  "title": "Outlook.com",
		  "name": "outlookcom",
		  "url": "https://outlook.com/",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/vk.svg",
		  "title": "VK",
		  "name": "vk",
		  "url": "https://vk.com/im",
		  "preload": "vk.js",
		  "useTitle": false,
		  "hasTeam": false
		},
		{
		  "img": "services/wire.svg",
		  "title": "Wire",
		  "name": "wire",
		  "url": "https://app.wire.com",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/icq.svg",
		  "title": "ICQ",
		  "name": "icq",
		  "url": "https://web.icq.com",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/irccloud.svg",
		  "title": "IRCCloud",
		  "name": "irccloud",
		  "url": "https://www.irccloud.com",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/ciscospark.svg",
		  "title": "Cisco Spark",
		  "name": "ciscospark",
		  "url": "https://web.ciscospark.com",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/facebookpages.svg",
		  "title": "Facebook Page",
		  "name": "facebookpage",
		  "url": "https://www.facebook.com/",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/linkedin.svg",
		  "title": "LinkedIn",
		  "name": "linkedin",
		  "url": "https://www.linkedin.com/messaging",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/hibox.svg",
		  "title": "Hibox",
		  "name": "hibox",
		  "url": "https://app.hibox.co",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/coupleme.svg",
		  "title": "Couple.me",
		  "name": "coupleme",
		  "url": "https://app.couple.me/",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/yahoomessenger.svg",
		  "title": "Yahoo! Messenger",
		  "name": "yahoomessenger",
		  "url": "https://messenger.yahoo.com/",
		  "preload": "default.js",
		  "useTitle": true,
		  "hasTeam": false
		},
		{
		  "img": "services/zendesk.svg",
		  "title": "Zendesk",
		  "name": "zendesk",
		  "url": "https://{teamId}.zendesk.com/agent",
		  "preload": "default.js",
		  "hasTeam": true
		}
	];
}

export default Directory;
