import React, { Component } from 'react';
import Flickity from 'flickity';

class HomeSlider extends Component {
  componentDidMount() {
    this.flickity = new Flickity(this.refs.itemsCarousel);
  }

  render() {
    return (
      <div className="home-slider">
        Flickity aqui
        <div className="items" ref="itemsCarousel">
          <div>Imagem 1</div>
          <div>Imagem 2</div>
        </div>
      </div>
    );
  }
}

export default HomeSlider;
