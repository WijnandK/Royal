import React, { Component } from "react";

import collections from "../../data";

import PreviewCollection from "../../components/previewCollection/PreviewCollection";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: collections
    };
  }

  render() {
    const collections = this.state.collections;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
