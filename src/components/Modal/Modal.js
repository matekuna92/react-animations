import React from 'react';
import { Transition } from 'react-transition-group';

import './Modal.css';

const modal = (props) => {
  //  const classes = `Modal ${props.show === 'entering' ? 'ModalOpen' : props.show === 'exiting' ? 'ModalClosed' : null}`;

    return (
        <Transition in={props.show} timeout={500} mountOnEnter={true} unmountOnExit={true}>
            {state => {
                const classes = `Modal ${state === 'entering' ? 'ModalOpen' : state === 'exiting' ? 'ModalClosed' : null}`;

                return (
                    <div className={classes}>
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>Dismiss</button>
                    </div>
               );
            }}
        </Transition>
    );
}

export default modal;