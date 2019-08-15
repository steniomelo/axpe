import React, { Component } from 'react';
import Card from '../components/card';
import Flickity from 'flickity-fade';

class CardList extends Component {
  componentDidMount() {
    this.cardList = new Flickity(this.refs.cardList, {
      pageDots: false,
      cellAlign: 'left',
      contain: true
    });
  }

  render() {
    return (
      <div className="card-list" ref="cardList">
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default CardList;
