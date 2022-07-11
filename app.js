// TODO
const Milk = () => (
  <div>
    <li>Milk</li>
  </div>
);

const Steak = () => (
  <div>
    <li>Steak</li>
  </div>
);

const App = () => (
  <div>
     <h1>GroceryList</h1>
        <Milk />
        <Steak />
  </div>
);
const CroceryListItem =(props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
    <li>{props.items[2]}</li>
    <li>{props.items[3]}</li>
    <li>{props.items[4]}</li>
  </ul>
)

// class App extends React.Component {
//   constructor(props){
//    super(props);
//   }
// render() {
//   return (
//     <div>
//      <h1>GroceryList</h1>
//          <li>Milk</li>
//          <li>Steak</li>
//    </div>
//   );
// };
// }


ReactDOM.render(<App />, document.getElementById('app'));

