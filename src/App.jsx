import React, { useReducer, useContext, createContext } from "react";
import "./App.css"

// Завдання: Світлофор

const TrafficLightContext = createContext();

const initState = { color: "grey" };

const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case "GREEN":
      return { color: "green" };
    case "YELLOW":
      return { color: "yellow" };
    case "RED":
      return { color: "red" };
    default:
      return state;
  }
};

const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initState);
  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

const TrafficLight = () => {
  const { state } = useContext(TrafficLightContext);
  return (
    <div className="traffic-light">
      {["red", "yellow", "green"].map((color) => (
        <div
          key={color}
          className={`light ${state.color === color ? color : ""}`}
        ></div>
      ))}
    </div>
  );
};

const Controls = () => {
  const { dispatch } = useContext(TrafficLightContext);
  return (
    <div className="controls">
      <button onClick={() => dispatch({ type: "RED" })}>Turn red</button>
      <button onClick={() => dispatch({ type: "YELLOW" })}>Turn yellow</button>
      <button onClick={() => dispatch({ type: "GREEN" })}>Turn green</button>
    </div>
  );
};

const App = () => {
  return (
    <TrafficLightProvider>
      <div className="container">
        <TrafficLight />
        <Controls />
      </div>
    </TrafficLightProvider>
  );
};

export default App;