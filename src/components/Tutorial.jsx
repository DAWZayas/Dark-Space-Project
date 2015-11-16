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
            <h2 className="titlePadding col-xs-12">Tutorial</h2>
          </div>
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
