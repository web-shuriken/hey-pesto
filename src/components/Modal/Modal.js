import React from "react";
// import {useEffect} from "react";

import styles from "./Modal.css";

function Modal({setModal, array}) {

    // useEffect{

    // }

    return (
        <div className={styles.modal_bg}>
        <div className={styles.modal_container}>
            <div className={styles.xbtn}>
                <button onClick={()=>setModal(false)}> X </button>
            </div>
                <ul>
                    {array.map((item, index)=> <li key={index}>{item}</li>)}
                </ul>
            </div>
            <div className={styles.closebtn}>
                <button onClick={() => setModal(false)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Modal;