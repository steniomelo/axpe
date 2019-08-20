import React, { Component, Fragment } from 'react';
import Building from './building';
import Flickity from 'flickity-fade';

class BuildingList extends Component {
  componentDidMount() {
    this.buildingList = new Flickity(this.refs.buildingList, {
      pageDots: false,
      cellAlign: 'left',
      contain: true
    });

    if (this.props.horz) {
      this.buildingListHorz = new Flickity(this.refs.buildingListHorz, {
        pageDots: false
      });

      this.buildingListHorzMobile = new Flickity(
        this.refs.buildingListHorzMobile,
        {
          pageDots: false,
          contain: true,
          wrapAround: true
        }
      );
    }
  }

  render() {
    if (!this.props.horz) {
      return (
        <div className="building-list block">
          <header className="block-header">
            <div className="block-title">{this.props.title}</div>
          </header>
          <div className="block-content" ref="buildingList">
            <Building />
            <Building />
            <Building />
          </div>
        </div>
      );
    } else {
      return (
        <Fragment>
          <div className="building-list building-list--horz block ">
            <header className="block-header">
              <div className="block-title">{this.props.title}</div>
            </header>
            <div className="block-content hide-mobile" ref="buildingListHorz">
              <div className="building-list-item">
                <Building horz />
                <Building horz />
              </div>
              <div className="building-list-item">
                <Building horz />
                <Building horz />
              </div>
            </div>

            <div
              className="block-content show-mobile"
              ref="buildingListHorzMobile"
            >
              <Building />
              <Building />
              <Building />
              <Building />
            </div>
          </div>
        </Fragment>
      );
    }
  }
}

export default BuildingList;
