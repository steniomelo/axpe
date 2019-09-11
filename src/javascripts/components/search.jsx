import React, { Component } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import SVG from 'react-inlinesvg';

// assets
import IconCloseSVG from 'images/icons/icon-close';
import IconClose2SVG from 'images/icons/icon-close2';
import IconArrowSVG from 'images/icons/icon-arrow';
import IconAlertSVG from 'images/icons/icon-alert';
import IconSearchSVG from 'images/icons/icon-search2';
import SearchList from 'javascripts/components/search/list';
import SearchFilters from 'javascripts/components/search/filters';

class Search extends Component {
  state = {
    searchOptionsActive: false,
    searchOptionsOut: false,
    searchOptionsClose: false,
    searchOptionsType: ''
  };

  openSearchOptions = type => {
    if (type) {
      type = type;
    } else {
      type = '';
    }

    if (this.state.searchOptionsActive) {
      this.setState({
        searchOptionsActive: false,
        searchOptionsOut: true,
        searchOptionsClose: false,
        searchOptionsType: type
      });
    } else {
      this.setState({
        searchOptionsActive: true,
        searchOptionsOut: false,
        searchOptionsClose: false,
        searchOptionsType: type
      });
    }
  };

  endSearchOptionsAnimation = () => {
    if (!this.state.searchOptionsActive && !this.state.searchOptionsClose) {
      this.openSearchOptions(this.state.searchOptionsType);
    }
  };

  closeSearchOptions = () => {
    this.setState({
      searchOptionsActive: false,
      searchOptionsOut: true,
      searchOptionsClose: true
    });
  };

  render() {
    const {
      searchOptionsActive,
      searchOptionsOut,
      searchOptionsType
    } = this.state;
    const searchClasses = [ `search` ];
    const searchOptionsclasses = [ `search-options` ];

    if (this.props.active) {
      searchClasses.push(`search--active`);
    }

    if (searchOptionsActive) {
      searchClasses.push(`search-options--active`);
    }

    if (searchOptionsOut) {
      searchClasses.push(`search-options--out`);
    }

    return (
      <div className={searchClasses.join(' ')}>
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
                <button
                  className="search-form__want-building-field__btn"
                  onClick={() => this.openSearchOptions('list')}
                >
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
                <div className="search-form-filters__to-buttons__group">
                  <label className="search-form-filters__to-button">
                    <input
                      type="radio"
                      name="morar-trabalhar"
                      value="morar"
                      className="search-form-filters__to-button__btn btn btn--outline btn--sm btn-radio"
                      checked
                      onChange={() => {}}
                    />
                    <span className="search-form-filters__to-button__label btn-label">
                      Morar
                    </span>
                  </label>
                  <span className="search-form-filters__to-or">ou</span>
                  <label className="search-form-filters__to-button">
                    <input
                      type="radio"
                      name="morar-trabalhar"
                      value="morar"
                      className="search-form-filters__to-button__btn btn btn--outline btn--sm btn-radio"
                    />
                    <span className="search-form-filters__to-button__label btn-label">
                      Trabalhar
                    </span>
                  </label>
                  {/* <button className="search-form-filters__to-button btn btn--outline btn--sm">
                    Trabalhar
                  </button> */}
                </div>
                <div className="search-form-filters__to-buttons__group">
                  <label className="search-form-filters__to-button">
                    <input
                      type="radio"
                      name="comprar-alugar"
                      value="morar"
                      checked
                      onChange={() => {}}
                      className="search-form-filters__to-button__btn btn btn--outline btn--sm btn-radio"
                    />
                    <span className="search-form-filters__to-button__label btn-label">
                      Comprar
                    </span>
                  </label>
                  <span className="search-form-filters__to-or">ou</span>
                  <label className="search-form-filters__to-button">
                    <input
                      type="radio"
                      name="comprar-alugar"
                      value="morar"
                      className="search-form-filters__to-button__btn btn btn--outline btn--sm btn-radio"
                    />
                    <span className="search-form-filters__to-button__label btn-label">
                      Alugar
                    </span>
                  </label>
                </div>
                <div className="search-form-filters__to-buttons__group">
                  <label className="search-form-filters__to-button">
                    <input
                      type="radio"
                      name="prontos-lancamentos"
                      value="morar"
                      className="search-form-filters__to-button__btn btn btn--outline btn--sm btn-radio"
                    />
                    <span className="search-form-filters__to-button__label btn-label">
                      Prontos
                    </span>
                  </label>
                  <span className="search-form-filters__to-or">ou</span>
                  <label className="search-form-filters__to-button">
                    <input
                      type="radio"
                      name="prontos-lancamentos"
                      value="morar"
                      className="search-form-filters__to-button__btn btn btn--outline btn--sm btn-radio"
                    />
                    <span className="search-form-filters__to-button__label btn-label">
                      Lançamentos
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="search-form-filters__menu">
              <button
                className="search-form-filters__menu-item"
                onClick={() => this.openSearchOptions('list')}
              >
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
              <button
                className="search-form-filters__menu-item"
                onClick={() => this.openSearchOptions('list')}
              >
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
              <button
                className="search-form-filters__menu-item"
                onClick={() => this.openSearchOptions('filters')}
              >
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

        <div
          className={searchOptionsclasses.join(' ')}
          onAnimationEnd={this.endSearchOptionsAnimation}
        >
          <button
            className="search-options-back show-mobile"
            onClick={this.closeSearchOptions}
          >
            <SVG src={IconArrowSVG} className="search-options-back__icon" />
          </button>
          <div className="search-options-container">
            <button
              className="search-options-close"
              onClick={this.closeSearchOptions}
            >
              <SVG
                src={IconClose2SVG}
                className="search-options__icon-close hide-mobile"
              />
            </button>
            <div className="search-options-content">
              {searchOptionsType === 'list' ? (
                <SearchList />
              ) : searchOptionsType === 'filters' ? (
                <SearchFilters />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
