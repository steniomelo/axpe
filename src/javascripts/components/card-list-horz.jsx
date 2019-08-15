import React, { Component, Fragment } from 'react';
import Card from '../components/card';
import Flickity from 'flickity-fade';

class CardListHorz extends Component {
  componentDidMount() {
    this.cardList = new Flickity(this.refs.cardList, {
      pageDots: false
    });

    this.cardListMobile = new Flickity(this.refs.cardListMobile, {
      pageDots: false,
      contain: true,
      wrapAround: true
    });
  }

  render() {
    return (
      <Fragment>
        <div className="card-list card-list--horz hide-mobile" ref="cardList">
          <div className="card-list-item">
            <Card horz />
            <Card horz />
          </div>
          <div className="card-list-item">
            <Card horz />
            <Card horz />
          </div>
        </div>

        <div
          className="card-list card-list--horz show-mobile"
          ref="cardListMobile"
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Fragment>
    );
  }
}

export default CardListHorz;
