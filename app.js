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


const GroceryListItem =(props) => {

   const OnListItemClick = (event) => {
    console.log('i got clicked!');
     }
  return (
  <ul>
    <li onClick ={OnListItemClick}>{props.items[0]}</li>
    <li>{props.items[1]}</li>
    <li>{props.items[2]}</li>
    <li>{props.items[3]}</li>
    <li>{props.items[4]}</li>
  </ul>
  );
}



const App = () => (
  <div>
     <h1>GroceryList</h1>
        <GroceryListItem items={['milk', 'steak', 'apple','wine', 'bread' ]} />
  </div>
);
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

