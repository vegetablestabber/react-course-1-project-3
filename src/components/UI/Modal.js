import { createPortal } from "react-dom"
import classes from "./Modal.module.css"

const Backdrop = props => {
	return <div className={classes.backdrop} onClick={props.onClear}></div>
}

const Modal = props => {
	return <div className={classes.modal}>{props.children}</div>
}

const ModalOverlay = props => {
	const backdropRoot = document.getElementById("backdrop-root")
	const modalRoot = document.getElementById("modal-root")

	return (
		<>
			{createPortal(<Backdrop onClear={props.onClear} />, backdropRoot)}
			{createPortal(
				<Modal onClear={props.onClear}>{props.children}</Modal>,
				modalRoot
			)}
		</>
	)
}

export default ModalOverlay
