import React, { Component, PropTypes } from 'react';
import TutorialNavesItem from './TutorialNavesItem';
import { Link } from 'react-router';

export default class Tutorial extends Component {

  constructor(props) {
    super(props);
    this.state = {
      it : 0,
      firstDisabled: true,
      lastDisabled: false
    };
  }

  handleBackButtonClick() {
    this.setState({
      firstDisabled : this.state.it <= 1 ? true : false,
      lastDisabled : false,
      it : this.state.it < 1 ? this.state.it : this.state.it - 1
   });
  }

  handleNextButtonClick() {
    const {naves} = this.props;
    this.setState({
      lastDisabled : this.state.it >= (naves.length - 2) ? true : false,
      firstDisabled:false,
      it : this.state.it >= (naves.length - 1) ? this.state.it : this.state.it + 1
    });
  }

  render() {

    const { naves } = this.props;

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="titlePadding">
            <h2>Tutorial</h2>
          </div>
          <ul>
            <li><strong>Dark space project:</strong></li>
          </ul>
          <p className="text">It is a strategy browser game, based on a universe of science fiction.. </p>
          <ul>
          <li><strong>Battle Simulation:</strong></li>
          </ul>
          <p className="text">
            For each point in the "Damaged" attribute of the attacking ship has a 50% chance to cause damage to the enemy ship.<br/>
            For each point in the "Agility" attribute of the defending ship it has a 50% chance of avoiding damage.<br/>
            Each damage done to a ship would eliminate first the shields and then the hull of the ship, a ship with 0 in the attribute "hull" is considered dead.
          </p>
          <ul>
            <li><strong>Ships available:</strong></li>
          </ul>
          <div className="col-xs-12">
            {
               <TutorialNavesItem navesProp={naves[this.state.it]} />
            }
          </div>
          <div className="col-xs-12">
          <nav>
            <ul className="pager">
              {(this.state.firstDisabled) ? <li className="previous disabled" onClick={e => this.handleBackButtonClick(e)}><Link to={"/tutorial"} style={{color: 'inherit', textDecoration: 'inherit'}}><span aria-hidden="true">&larr;</span>Back</Link></li>
              : <li className="previous" onClick={e => this.handleBackButtonClick(e)}><Link to={"/tutorial"} style={{color: 'inherit', textDecoration: 'inherit'}}><span aria-hidden="true">&larr;</span>Back</Link></li>}
              {(this.state.lastDisabled) ? <li className="next disabled" onClick={e => this.handleNextButtonClick(e)}><Link to={"/tutorial"} style={{color: 'inherit', textDecoration: 'inherit'}}>Next <span aria-hidden="true">&rarr;</span></Link></li>
              : <li className="next" onClick={e => this.handleNextButtonClick(e)}><Link to={"/tutorial"} style={{color: 'inherit', textDecoration: 'inherit'}}>Next <span aria-hidden="true">&rarr;</span></Link></li>}
            </ul>
          </nav>
          </div>
        </div>
      </div>
    );
  }
}

Tutorial.propTypes = {
  naves:PropTypes.array.isRequired
};
