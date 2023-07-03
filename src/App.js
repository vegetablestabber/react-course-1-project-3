import Header from "./components/Layout/Header"
import MealsSummary from "./components/Layout/MealsSummary"
import AvailableMeals from "./components/Meal/AvailableMeals"

import "./App.css"

function App() {
	return (
		<>
			<Header />
			<MealsSummary />
			<AvailableMeals />
		</>
	)
}

export default App
