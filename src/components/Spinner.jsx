import React from 'react';

export default class Spinner extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}} >
                <img src="http://www.gifmania.com/Peliculas-Cine/Cine-De-Ciencia-Ficcion/Star-Wars/TIE-Fighter/tie-fighter1-36282.gif" width="120" height="80" />
            </div>
        );
    }
}


Spinner.propTypes = {
  //friendsName: React.PropTypes.array,

};
