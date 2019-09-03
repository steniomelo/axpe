import React, { Fragment, Component } from 'react';
import InputRange from 'react-input-range';

class SearchFilters extends Component {
  state = {
    value: { min: 550000, max: 1000000 },
    area: { min: 30, max: 500 },
    bedroom: { min: 1, max: 5 }
  };

  formatCurrency = value => {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  render() {
    return (
      <Fragment>
        <header className="options-header">
          <div className="options-title">Filtros</div>
        </header>

        <div className="options-items">
          <div className="option-item option-item--input-range">
            <div className="option-item__title">Valor</div>
            <div className="option-item__values">
              <span className="option-item__value">
                R$ {this.formatCurrency(this.state.value.min)}
              </span>{' '}
              <span className="option-item__spacer">-</span>
              <span className="option-item__value">
                R$ {this.formatCurrency(this.state.value.max)}
              </span>
            </div>

            <InputRange
              minValue={550000}
              maxValue={1000000}
              value={this.state.value}
              onChange={value => this.setState({ value })}
            />
          </div>

          <div className="option-item option-item--input-range">
            <div className="option-item__title">Área útil</div>

            <div className="option-item__values">
              <span className="option-item__value">
                {this.state.area.min} m
              </span>
              <span className="option-item__spacer">-</span>

              <span className="option-item__value">
                {this.state.area.max} m
              </span>
            </div>

            <InputRange
              minValue={30}
              maxValue={500}
              value={this.state.area}
              onChange={area => this.setState({ area })}
            />
          </div>

          <div className="option-item option-item--input-range">
            <div className="option-item__title">Dormitórios</div>

            <div className="option-item__values">
              <span className="option-item__value">
                {this.state.bedroom.min}
              </span>
              <span className="option-item__spacer">a</span>

              <span className="option-item__value">
                {this.state.bedroom.max}
              </span>
            </div>

            <InputRange
              minValue={1}
              maxValue={5}
              value={this.state.bedroom}
              onChange={bedroom => this.setState({ bedroom })}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SearchFilters;
