import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// assets
import cardImage from 'images/tmp/card-imovel.png';
import cardImageMobile from 'images/tmp/card-imovelMobile.png';

class Building extends Component {
  render() {
    const classes = [ `card` ];

    if (this.props.horz) {
      classes.push('card--horz');
    }

    return (
      <div className={classes.join(' ')}>
        <div className="card-image">
          <img src={cardImage} alt="" className="card-img card-img--desktop" />
          <img
            src={cardImageMobile}
            alt=""
            className="card-img card-img--mobile"
          />
        </div>
        <div className="card-content">
          <div className="card-text">
            <div className="card-text__title">Vila madalena</div>
            <div className="card-text__description">
              Apartamento, 90 m²
              <br />
              Venda: R$ 1.120.000
              <br />
              Aluguel: R$ 5.200
            </div>
            <p className="card-text__ref">Ref AX3715</p>
          </div>
          <div className="card-button">
            <Link to="" className="btn">
              Saiba mais
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Building;
