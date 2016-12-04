import React from '../../node_modules/react';
import OpiosTag from './OpiosTag';

class OpiosTags extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

    var data = [
      {key: 1, title: 'TAG 1', colorCls: 'yellow'},
      {key: 2, title: 'TAG 2', colorCls: 'red'},
      {key: 3, title: 'TAG 3', colorCls: 'violet'}
    ],
    rows = [];

    if(data.length){
      for(var d in data){
        rows.push(<OpiosTag data={data[d]} key={data[d].key} />);
      }
    }

    return (
      <div>
        <aside className="aside-left">

            {rows}


        </aside>
      </div>
    );
  }
}

export default OpiosTags;

/*
            <div className="aside-tag yellow">TAG 1</div>
            <div className="aside-tag red">TAG 2</div>
            <div className="aside-tag violet">TAG 2</div>

            */