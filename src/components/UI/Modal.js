import styled from "./Modal.module.css";
import React, { Fragment } from 'react';
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styled.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return <div className={styled.modal}>
    <div className={styled.content}>{props.children}</div>
  </div>;
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
};

export default Modal;