import React from '../../node_modules/react';

class OpiosTags extends React.Component {

  constructor(props) {
	   super(props);
  }

  render() {

    return (
      <div>
        <aside className="aside-left">
            <div className="aside-tag yellow">TAG 1</div>
            <div className="aside-tag red">TAG 2</div>
            <div className="aside-tag violet">TAG 2</div>
        </aside>
      </div>
    );
  }
}

export default OpiosTags;
