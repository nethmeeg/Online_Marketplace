import React from 'react';
import Card from './Card';
import ProductCardDescription from './ProductCardDesc';
import ProductCardGallery from './ProductCardGallery';
import PriceTag from './PriceTag';

import './CompoStyles.scss';

class ProductCard extends React.Component {
  render() {
    let {
      photos,
      price,
      productName,
      description,
      buttonText,
      rating,
      url
    } = this.props;

    return (
      <Card
        className='product-card'
      >
        <ProductCardGallery
          photos={photos}
        />
        <PriceTag
          price={price}
        />
        <ProductCardDescription
          productName={productName}
          description={description}
          buttonText={buttonText}
          rating={rating}
          url={url}
        />
      </Card>
    );
  }
}

export default ProductCard;