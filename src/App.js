import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <main>
      <h1>Hello React!</h1>
      <Greeting name="Zaya" />
      <form
        onSubmit={function (e) {
          e.preventDefault();
          setTodos([...todos, { text: value }]);
          setValue("");
        }}
      >
        <input
          value={value}
          onChange={function (e) {
            setValue(e.target.value);
          }}
        />
        <select name="deadline" id="deadline">
          <option value="daily">DAILY</option>
          <option value="set">SET DATE</option>
        </select>
        <button>+</button>
      </form>
      <ul>
        {todos.map(function (todo) {
          return <li>{todo.text}</li>;
        })}
      </ul>
    </main>
  );

  /*

  JSX is just sugar for function call syntax.

  The above code ^ would compile to something like:

    return (
      React.createElement(
        "main",
        {},
        React.createElement(
          "h1",
          {},
          "Hello React!"
        )
      )
    )

    The parameters are:
      React.createElement(tag, props, ...children)

  <h1 class="pain" id="suffering">Hello</h1>
          React.createElement(
          "h1",
          {class: "pain", id: "suffering"},
          "Hello React!"
        )

  */
}

export default App;
