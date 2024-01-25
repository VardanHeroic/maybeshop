import { Link } from 'react-router-dom';

export default function ProductCard({ title, id, cartItems, toggleBasket, price, thumbnail }) {
    return (
        <article>
            <img src={thumbnail} alt="" /> <br />
            <Link to={'/ProductPage/' + id} >{title}</Link><br />
            <span>{price.toFixed(2) + '$'}</span><br /><br />
            <button
                type="submit"
                onClick={e => toggleBasket(id)}
                className={cartItems[id] > 0 ? 'red productCard-btn' : 'productCard-btn'}
            >
                {cartItems[id] > 0 ? 'Remove from Basket' : 'Add to Basket'}

            </button>
        </article>
    )
}
