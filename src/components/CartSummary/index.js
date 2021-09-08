import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0
      cartList.forEach(eachProduct => {
        const {quantity, price} = eachProduct
        totalPrice += quantity * price
      })
      const itemsCount = cartList.length
      return (
        <div className="summary-container">
          <div className="summary">
            <h1 className="total-price-text">
              Order Total:
              <span className="total-price"> Rs {`${totalPrice}/-`}</span>
            </h1>
            <p className="total-items-text">{itemsCount} items in cart</p>
            <button type="button" className="checkout-button-large">
              Checkout
            </button>
          </div>
          <button type="button" className="checkout-button-small">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
