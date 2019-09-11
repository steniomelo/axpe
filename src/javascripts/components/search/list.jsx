import React, { Fragment, Component } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import SVG from 'react-inlinesvg';

// assets
import IconCheckSVG from 'images/icons/icon-check';

class SearchList extends Component {
  render() {
    return (
      <Fragment>
        <header className="options-header">
          <div className="options-title">Tipo de imóvel</div>
        </header>

        <div className="options-items">
          <label className="option-item">
            <input type="checkbox" className="option-item__check" />
            <span className="option-item__label">Apartamento</span>
            <SVG src={IconCheckSVG} className="option-item__icon" />
          </label>

          <label className="option-item">
            <input type="checkbox" className="option-item__check" />
            <span className="option-item__label">Casa em condomínio</span>
            <SVG src={IconCheckSVG} className="option-item__icon" />
          </label>

          <label className="option-item">
            <input type="checkbox" className="option-item__check" />
            <span className="option-item__label">Vinhedos</span>
            <SVG src={IconCheckSVG} className="option-item__icon" />
          </label>
        </div>
      </Fragment>
    );
  }
}

export default SearchList;
