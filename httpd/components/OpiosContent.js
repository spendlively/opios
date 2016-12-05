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
        availableServicesRows = [];

    if(services.length){
        for(var d in services){
            var serviceProps = directory.getServicePropsByName(services[d]['name']),
                data = {
                    id: services[d]['id'],
                    url: serviceProps['url']
                };

            webViewRows.push(<OpiosWebView data={data} key={services[d]['id']} />);
        }
    }    

    if(availableServices.length){
        for(var d in availableServices){
            availableServicesRows.push(<OpiosService data={availableServices[d]} key={availableServices[d].name} />);
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
