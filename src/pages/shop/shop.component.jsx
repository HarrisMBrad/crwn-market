import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import { selectCollections } from "../../redux/shop/shop_selectors";
import { createStructuredSelector } from "reselect";
//
const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

//
/*switched the class component over 
to a functional compnent...*/
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
