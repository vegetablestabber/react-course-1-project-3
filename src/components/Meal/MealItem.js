import { useContext } from "react"
import CartContext from "../../store/CartContext"
import MealItemForm from "./MealItemForm"

import classes from "./MealItem.module.css"

const MealItem = ({ id, name, description, price }) => {
	const cartCtx = useContext(CartContext)

	return (
		<div className={classes.meal}>
			<div className={classes.details}>
				<h3>{name}</h3>
				<span className={classes.description}>{description}</span>
				<span className={classes.price}>{price}</span>
			</div>

			<MealItemForm onSubmit={amount => cartCtx.addItem(id, amount)} />
		</div>
	)
}

export default MealItem
