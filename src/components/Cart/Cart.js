import { useContext } from "react"
import MenuContext from "../../store/MenuContext"
import CartContext from "../../store/CartContext"
import ModalOverlay from "../UI/Modal"
import CartItem from "./CartItem"

import classes from "./Cart.module.css"

const Cart = props => {
	const menuCtx = useContext(MenuContext)
	const cartCtx = useContext(CartContext)

	const getMeal = id => menuCtx.meals.find(meal => id === meal.id)

	const totalPrice = cartCtx.items.reduce((total, item) => {
		const { price } = getMeal(item.id)
		return total + item.amount * price
	}, 0)

	return (
		<ModalOverlay onClear={props.onConfirm}>
			<ul className={classes["cart-items"]}>
				{cartCtx.items.length === 0 && <h2>No items available.</h2>}
				{cartCtx.items.length !== 0 &&
					cartCtx.items.map(({ id, amount }) => {
						const { name, price } = getMeal(id)

						return (
							<CartItem
								key={id}
								name={name}
								price={price}
								amount={amount}
								onAdd={() => cartCtx.addItem(id, 1)}
								onRemove={() => cartCtx.removeItem(id)}
							/>
						)
					})}
			</ul>

			<div className={classes.total}>
				<h2>Total Amount</h2>
				<h2>${totalPrice.toFixed(2)}</h2>
			</div>

			<div className={classes.actions}>
				<button
					className={classes["button--alt"]}
					onClick={props.onConfirm}
				>
					Close
				</button>
				<button className={classes.button} onClick={props.onOrder}>
					Order
				</button>
			</div>
		</ModalOverlay>
	)
}

export default Cart
