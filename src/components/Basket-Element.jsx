import { useRef } from "react"


export default function Cart_Item(props) {
    const input = useRef(null)

    function handleClick(num){
        if (props.cartItems[props.id] + num < 1) {
           return
        }
        props.changePrice(props.id, props.cartItems[props.id] + num)
        input.current.value = props.cartItems[props.id] + num
    }


    return (
        <div className="cart-item">
            <div className="cart-item-info">
                <img className='cart-item-img' src={props.thumbnail} alt="" />
                <span className='cart-item-title'>{props.title}</span><br />
                <span className='cart-item-price'>{(props.price * props.cartItems[props.id]).toFixed(2) + '$'}</span>
            </div>
            <div className="cart-item-right">
                <button className="cart-item-remove" onClick={(e) => { props.removeElement(props.id) }} >×</button><br />
                <div className="cart-item-amount">
                    <button className="cart-item-amount-btn" onClick={() => handleClick(-1)}>-</button>
                    <input ref={input} type="number" className='cart-item-amount-input' min={1} defaultValue={props.cartItems[props.id]} onChange={e => props.changePrice(props.id, e.target.value)} />
                    <button className="cart-item-amount-btn" onClick={() => handleClick(1) }>+</button>
                </div>
            </div>
        </div>
    )
}
