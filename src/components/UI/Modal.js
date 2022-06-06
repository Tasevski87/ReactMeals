import classes from "./Modal.module.css";
import React, { Fragment } from "react";
import ReactDom from "react-dom";

const Backdrop = (props) => {
    return <div className={classes.backdrop} />
};
const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portlElement = document.getElementById("overlays")
const Modal = (props) => {
    return <Fragment>
        {ReactDom.createPortal(<Backdrop />, portlElement)}

        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portlElement)}
    </Fragment>
};

export default Modal;