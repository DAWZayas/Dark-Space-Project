import React from 'react';

export default class Spinner extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}} >
                <img src="http://elections.sabc.co.za/elections2014/imgs/loader_gif.gif" width="120" height="80" />
            </div>
        );
    }
}


Spinner.propTypes = {
  //friendsName: React.PropTypes.array,

};
