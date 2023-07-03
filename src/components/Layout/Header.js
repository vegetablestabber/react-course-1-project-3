import { useState } from "react"
import Cart from "../Cart/Cart"
import HeaderCartButton from "../Cart/HeaderCartButton"

import classes from "./Header.module.css"
import mealsImage from "../../assets/meals.jpg"

const Header = () => {
	const [isCartVisible, setCartVisibility] = useState(false)

	return (
		<>
			{isCartVisible && (
				<Cart
					onConfirm={() => setCartVisibility(false)}
					onOrder={() => {
						setCartVisibility(false)
						console.log("Ordering...")
					}}
				/>
			)}

			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={() => setCartVisibility(true)} />
			</header>

			<div className={classes["main-image"]}>
				<img src={mealsImage} />
			</div>
		</>
	)
}

export default Header
