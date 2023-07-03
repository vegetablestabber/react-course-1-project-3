import { useContext } from "react"
import MenuContext from "../../store/MenuContext"
import Card from "../UI/Card"
import MealItem from "./MealItem"

import classes from "./AvailableMeals.module.css"

const AvailableMeals = () => {
	const menuCtx = useContext(MenuContext)

	return (
		<Card className={classes.meals}>
			<ul>
				{menuCtx.meals.map(meal => (
					<li key={meal.id}>
						<MealItem
							id={meal.id}
							name={meal.name}
							description={meal.description}
							price={meal.price}
						/>
					</li>
				))}
			</ul>
		</Card>
	)
}

export default AvailableMeals
