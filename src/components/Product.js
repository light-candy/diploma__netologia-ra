import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export function Product(props) {
  const {
    images,
    title,
    price,
    id
  } = props;
  return (
    <div className="col-4">
      <div className="card catalog-item-card">
        <img src={images[0]} className="card-img-top img-fluid" alt={title} />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{price} руб.</p>
          <Link to={`/catalog/${id}`} className="btn btn-outline-primary">
            Заказать
          </Link>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number
};
