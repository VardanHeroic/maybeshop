import { Link } from 'react-router-dom';

export default function ProductCard({ title, id, toggleBasket, price, thumbnail }) {
    return (
        <article className='productCard'>
            <div className="productCard-header">
                <Link to={'/ProductPage/' + id} className="productCard-title" >{title}</Link><br />
            </div>
            <Link to={'/ProductPage/' + id} className="productCard-imagelink" ><img className="productCard-image" src={thumbnail} alt="" /></Link><br />
            <div className="productCard-footer">
                <span className='productCard-price'>{price.toFixed(2) + '$'}</span>
                <button
                    type="submit"
                    onClick={e => toggleBasket(id)}
                    className='productCard-btn'
                >
                    Add to Cart
                </button>
            </div>
        </article>
    )
}
