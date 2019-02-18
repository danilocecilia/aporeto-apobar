import React, { Component } from "react";

export default class Home extends Component {
  renderCard = (type, url) => (
    <div className="card" style={{ cursor: "pointer" }}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={url} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{type}</p>
          </div>
        </div>

        <div className="content">Here you will have access to the {type}</div>
      </div>
    </div>
  );

  render() {
    return (
      <div className="columns">
        <div className="column">
          {this.renderCard(
            "BREWERY",
            "https://media.graytvinc.com/images/Beer7.png"
          )}
        </div>
        <div className="column">
          {this.renderCard("WINERY", "https://tinyurl.com/y2cdzzr7")}
        </div>
      </div>
    );
  }
}
