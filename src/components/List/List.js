import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './List.css';

class List extends Component {
    state = {
        items: [1, 2, 3]
    }

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(prevState.items.length + 1)
            };
        });
    }

    removeItemHandler = (selIndex) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item, index) => index !== selIndex)
            };
        });
    }

    // TransitionGroup can only be used together with Transition or CSSTransition.
    // without it app gets multiply errors:
    // Warning: Unknown event handler property `onExited`. It will be ignored.
    // Warning: Received `true` for a non-boolean attribute `in`.
    
    // TransitionGroup manages the "in" property automatically for dynamic lists to control the state of transition
    // it determines if an element is added or removed and automatically set the in property
    render () {
        const listItems = this.state.items.map( (item, index) => (
            <CSSTransition key={index} classNames='fade' timeout={300}>
                <li 
                    className="ListItem" 
                    onClick={() => this.removeItemHandler(index)}>{item}</li>
            </CSSTransition>
        ));

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                <TransitionGroup component='ul' className='List'>
                    {listItems}
                </TransitionGroup>
            </div>
        );
    }
}

export default List;