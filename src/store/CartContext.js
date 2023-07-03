import { createContext, useState } from "react"

const CartContext = createContext({
	items: [],
	addItem: () => {},
	removeItem: () => {},
})

export const CartContextProvider = props => {
	const [items, setItems] = useState([])

	const addItem = (id, amount) => {
		if (amount !== 0) {
			setItems(prevItems => {
				let itemExists = false

				const updatedItems = prevItems.map(item => {
					if (item.id === id) {
						itemExists = true
						return {
							id,
							amount: item.amount + amount,
						}
					}

					return item
				})

				if (itemExists) {
					return updatedItems
				}

				return [...prevItems, { id, amount }]
			})
		}
	}

	const removeItem = id => {
		setItems(prevItems =>
			prevItems.reduce((result, item) => {
				if (item.id === id) {
					if (item.amount !== 1) {
						result.push({ id, amount: item.amount - 1 })
					}
				} else {
					result.push(item)
				}

				return result
			}, [])
		)
	}

	return (
		<CartContext.Provider value={{ items, addItem, removeItem }}>
			{props.children}
		</CartContext.Provider>
	)
}

export default CartContext
