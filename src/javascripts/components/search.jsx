import React, { Component } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import SVG from 'react-inlinesvg';

// assets
import IconCloseSVG from 'images/icons/icon-close';
import IconArrowSVG from 'images/icons/icon-arrow';
import IconAlertSVG from 'images/icons/icon-alert';
import IconSearchSVG from 'images/icons/icon-search2';

class Search extends Component {
  render() {
    const classes = [ `search` ];

    if (this.props.active) {
      classes.push(`search--active`);
    }

    return (
      <div className={classes.join(' ')}>
        <div className="search-form">
          <header className="search-form-header">
            <button
              className="search-form-close"
              onClick={this.props.btnSearchToggle}
            >
              <SVG
                src={IconCloseSVG}
                className="search-form__icon-close show-mobile"
              />
            </button>

            <div className="search-form__want-building">
              <div className="search-form__want-building-title">
                Quero um imovel:
              </div>
              <div className="search-form__want-building-field">
                <button className="search-form__want-building-field__btn">
                  alterar localização
                </button>
                <input
                  type="text"
                  className="search-form__want-building-field__input"
                  value="Em São Paulo"
                  disabled
                />
              </div>
            </div>
          </header>

          <div className="search-form-filters">
            <div className="search-form-filters__to">
              <div className="search-form-filters__to-title">Para:</div>

              <div className="search-form-filters__to-buttons">
                <div className="search-form-filters__to-buttons__row">
                  <button className="search-form-filters__to-button btn btn--outline btn--sm btn--active">
                    Morar
                  </button>
                  <span className="search-form-filters__to-or">ou</span>
                  <button className="search-form-filters__to-button btn btn--outline btn--sm">
                    Trabalhar
                  </button>
                </div>
                <div className="search-form-filters__to-buttons__row">
                  <button className="search-form-filters__to-button btn btn--outline btn--sm btn--active">
                    Comprar
                  </button>
                  <span className="search-form-filters__to-or">ou</span>
                  <button className="search-form-filters__to-button btn btn--outline btn--sm">
                    Alugar
                  </button>
                </div>
                <div className="search-form-filters__to-buttons__row">
                  <button className="search-form-filters__to-button btn btn--outline btn--sm">
                    Prontos
                  </button>
                  <span className="search-form-filters__to-or">ou</span>
                  <button className="search-form-filters__to-button btn btn--outline btn--sm">
                    Lançamentos
                  </button>
                </div>
              </div>
            </div>

            <div className="search-form-filters__menu">
              <button className="search-form-filters__menu-item">
                <strong className="search-form-filters__menu-item__type">
                  Tipo de imóvel
                </strong>
                <small className="search-form-filters__menu-item__selected">
                  Apartamento e Casa
                </small>
                <SVG
                  src={IconArrowSVG}
                  className="search-form-filters__menu-item__arrow"
                />
              </button>
              <button className="search-form-filters__menu-item">
                <strong className="search-form-filters__menu-item__type">
                  Selecione a localização
                </strong>
                <small className="search-form-filters__menu-item__selected">
                  Apartamento e Casa
                </small>
                <SVG
                  src={IconArrowSVG}
                  className="search-form-filters__menu-item__arrow"
                />
              </button>
              <button className="search-form-filters__menu-item">
                <strong className="search-form-filters__menu-item__type">
                  Mais filtros
                </strong>
                <SVG
                  src={IconArrowSVG}
                  className="search-form-filters__menu-item__arrow"
                />
              </button>
            </div>
          </div>

          <footer className="search-form-footer">
            <div className="search-form-footer__field">
              <SVG
                src={IconSearchSVG}
                className="search-form-footer__field-icon"
              />
              <input
                type="text"
                className="search-form-footer__field-input"
                placeholder="buscar por referência"
              />
            </div>
            <button className="search-form-footer__button btn">Buscar</button>

            <div className="search-form-footer__options">
              <div className="search-form-footer__options-addalert">
                <button className="search-form-footer__options-addalert-button">
                  <SVG
                    src={IconAlertSVG}
                    className="search-form-footer__options-addalert-icon"
                  />
                  <span className="search-form-footer__options-addalert-button__label">
                    criar alerta
                  </span>
                </button>
              </div>

              <div className="search-form-footer__options-clearfilters">
                <button className="search-form-footer__options-clearfilters-button">
                  limpar filtros
                </button>
              </div>
            </div>
          </footer>
        </div>

        <div className="search-options">search-content</div>
      </div>
    );
  }
}

export default Search;
