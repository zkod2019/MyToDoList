import logo from "./logo.svg";
import "./App.css";

function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}

function App() {
  return (
    <main>
      <h1>Hello React!</h1>
      <Greeting name="Zaya" />
      <form>
        <input />
        <select name="deadline" id="deadline">
          <option value="daily">DAILY</option>
          <option value="set">SET DATE</option>
        </select>
        <button>+</button>
      </form>
      <ul></ul>
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
