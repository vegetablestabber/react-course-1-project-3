import { useRef } from "react"

import classes from "./MealItemForm.module.css"

const MealItemForm = props => {
	const amountInputRef = useRef()

	return (
		<form
			className={classes.form}
			onSubmit={event => {
				event.preventDefault()
				props.onSubmit(+amountInputRef.current.value)
			}}
		>
			<label htmlFor="amount">Amount</label>
			<input type="number" id="amount" ref={amountInputRef} />
			<button type="submit">+ Add</button>
		</form>
	)
}

export default MealItemForm
