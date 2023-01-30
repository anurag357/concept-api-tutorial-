import React, { Fragment } from "react";
import Provider from "./provider";
import Context from "./context";

const Agents = () => {
  return <AgentOne />
}

const AgentOne = () => {
  return <AgentTwo />
}


const AgentTwo = () => {
  return <AgentBond />
} 

const AgentBond = () => {
  return(
    <Context.Consumer>
      { context => (
          <Fragment>
            <h3>Agent Information</h3>
            <p>Mission Name: {context.data.name}</p>
            <p>Mission Agent: {context.data.agent}</p>
            <p>Mission Accepted: {context.data.accept}</p>
            <button onClick={context.isMissionAccepted}>Choose Accept</button>
          </Fragment>
      )}
      </Context.Consumer>
  )
}

const App = () => {
  return (
    <div>
      <h1>Context Api</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  )
}

export default App