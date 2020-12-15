import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview';

import { selectCollections } from '../../redux/shop/shop_selectors'; 
import { createStructuredSelector } from 'reselect';

const ShopPage = ({ collections }) => (
      <div className="shop-page">

                  {
                        collections.map(({ id, ...otherCollectionProps }) => (
                              <CollectionPreview key={id} {...otherCollectionProps} />
                        ))}
                  
            </div>
            
);

const mapStateToProps = createStructuredSelector({
      collections: selectCollections
});
      

export default connect(mapStateToProps)(ShopPage);