import React, { Component } from "react";
import { Transition } from 'react-transition-group';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    isModalOpen: false,
    showBlock: false
  };

  showModal = () => {
    this.setState({isModalOpen: true});
  }

 closeModal = () => {
    this.setState({isModalOpen: false});
  }

  // render modal and backdrop in DOM only if it's needed to display instead of rendering every time with opacity: 0 - cleaner DOM
  // out animation doesnt work, because element is removed instantly from DOM, it doesnt wait for animation to finish
  // if showBlock is true, then the content inside Transition component should be rendered
  /*the div inside Transition is always present in the DOM, even if it has 0 opacity. To optimize DOM elements Transition component have:
  mountOnEnter and unMountOnExit properties, so the element is only added to DOM when toggle button is clicked, and removed from DOM when state is exited */
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button onClick={() => this.setState(prevState => ({ showBlock: !prevState.showBlock }))}> Toggle </button>

        <Transition in={this.state.showBlock} timeout={1000} mountOnEnter={true} unmountOnExit={true}>
          {state => (
            <div style={{
              backgroundColor: 'red',
              width: '100px',
              height: '100px',
              margin: 'auto',
              transition: 'opacity 1s ease-out',
              opacity: state === 'exiting' ? 0 : 1
            }}></div>
          )}
        </Transition>
        {/*<Transition in={this.state.isModalOpen} timeout={500} mountOnEnter={true} unmountOnExit={true}>*/}
        {/*  {state => (*/}
        {/*    <Modal closed={this.closeModal} show={state} />*/}
        {/*  )}*/}
        {/*</Transition>*/}

        <Modal closed={this.closeModal} show={this.state.isModalOpen} />
        {this.state.isModalOpen ? <Backdrop show={this.state.isModalOpen} /> : null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
