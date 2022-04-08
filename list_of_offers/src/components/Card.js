import PropTypes from 'prop-types';

export default function Card(props) {
  const { url, mainImage, title, currency_code, price, quantity } = props;

  const shortTitle =
    title.length > 50 ? [...title].splice(0, 50).join('') + '...' : title;

  const fullCost =
    currency_code === 'GBP'
      ? `${price}${currency_code}`
      : `${currency_code === 'USD' ? '$' : '€'}${price}`;

  const level =
    quantity > 20
      ? 'level-high'
      : quantity <= 10
        ? 'level-low'
        : 'level-medium';

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={mainImage} alt='Изображение товара' />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{shortTitle}</p>
        <p className="item-price">{fullCost}</p>
        <p className={`item-quantity ${level}`}>{quantity} left</p>
      </div>
    </div>
  );
}

Card.defaultProps = {
  url: '',
  mainImage: '',
  title: '',
  currency_code: '',
  price: '',
  quantity: 0,
};

Card.propTypes = {
  url: PropTypes.string,
  mainImage: PropTypes.string,
  title: PropTypes.string,
  currency_code: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number,
};
