import React from '../../node_modules/react';
import OpiosWebView from './OpiosWebView';
import OpiosService from './OpiosService';
import Directory from '../modules/Directory';

class OpiosContent extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

    var services = this.props.data.services,
        webViewRows = [],
        directory = new Directory(),
        availableServices = directory.getAvailableServices(),
        availableServicesRows = [],
        l12n = this.props.data.l12n.servicesListWindow;

    if(services.length){
        for(var d in services){
            var serviceProps = directory.getServicePropsByName(services[d]['name']),
                data = {
                    team: services[d]['team'],
                    id: services[d]['id'],
                    url: serviceProps['url']
                };

            webViewRows.push(<OpiosWebView data={data} key={services[d]['id']} />);
        }
    }    

    if(availableServices.length){
        for(var d in availableServices){
            availableServicesRows.push(<OpiosService data={availableServices[d]} key={availableServices[d].name} store={this.props.store} />);
        }
    }

    return (
      <div>
        <article id="main-article">
            <div id="main-article-body" className="service-body">

                {webViewRows}

                <div className="content-block" id="services-list" style={{display:'block', width:'100%'}}>
                    <div className="services-list">
                        <h1>{l12n.title}</h1>
                        <ul>
                            <li className="services-list-li active"><a href="#">{l12n.all}</a></li>
                            <li className="services-list-delimitter">/</li>
                            <li className="services-list-li"><a href="#">{l12n.messengers}</a></li>
                            <li className="services-list-delimitter">/</li>
                            <li className="services-list-li"><a href="#">{l12n.email}</a></li>
                            <li className="services-list-delimitter">/</li>
                            <li className="services-list-li"><a href="#">{l12n.social}</a></li>
                            <li className="services-list-delimitter">/</li>
                            <li className="services-list-li"><a href="#">{l12n.data}</a></li>
                            <li className="services-list-delimitter">/</li>
                            <li className="services-list-li"><a href="#">{l12n.other}</a></li>
                        </ul>

                        <div className="service-icons">


                            {availableServicesRows}


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
