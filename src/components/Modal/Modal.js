import React from 'react';
import {CSSTransition, Transition} from 'react-transition-group';

import './Modal.css';

const animationTiming = {
    enter: 400,
    exit: 1000
};

const modal = (props) => {
  //  const classes = `Modal ${props.show === 'entering' ? 'ModalOpen' : props.show === 'exiting' ? 'ModalClosed' : null}`;

//    return (
//        <Transition in={props.show} timeout={animationTiming} mountOnEnter={true} unmountOnExit={true}>
//            {state => {
//                const classes = `Modal ${state === 'entering' ? 'ModalOpen' : state === 'exiting' ? 'ModalClosed' : null}`;
//
//                return (
//                    <div className={classes}>
//                        <h1>A Modal</h1>
//                        <button className="Button" onClick={props.closed}>Dismiss</button>
//                    </div>
//               );
//            }}
//        </Transition>
//    );

    // CSSTransition component alternative
    return (
        <CSSTransition in={props.show} timeout={animationTiming} mountOnEnter={true} unmountOnExit={true}
            classNames={{
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClosed'
        }}>
            <div className='Modal'>
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        </CSSTransition>
    );
}

export default modal;