import { useContext } from "react"
import CartIcon from "./CartIcon"
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/CartContext"

const HeaderCartButton = props => {
	const ctx = useContext(CartContext)

	return (
		<button className={classes.button} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>

			<span>Your Cart</span>

			<span className={classes.badge}>{ctx.items.length}</span>
		</button>
	)
}

export default HeaderCartButton
