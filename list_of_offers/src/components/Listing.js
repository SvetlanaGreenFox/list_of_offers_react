import PropTypes from 'prop-types';
import Card from './Card.js';

export default function Listing(props) {
  const { items } = props;

  return (
    <div className="item-list">
      {items.map((item) =>
        item.listing_id &&
          item.url &&
          item['MainImage']['url_570xN'] &&
          item.title &&
          item.currency_code &&
          item.price &&
          item.quantity ? (
          <Card
            key={item.listing_id}
            url={item.url}
            mainImage={item['MainImage']['url_570xN']}
            title={item.title}
            currency_code={item.currency_code}
            price={item.price}
            quantity={item.quantity}
          />
        ) : (
          items.error_messages
        )
      )}
    </div>
  );
}

Listing.defaultProps = {
  items: [],
};

Listing.propTypes = {
  items: PropTypes.array,
};