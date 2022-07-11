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


class GroceryListItem  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      done: false
    };
  }
   
  OnListItemMouseEnter = (event) => {
    this.setState({
      done: !this.state.done
    });
  }
  
    // OnListItemMouseLeave = (event) => {
    //   this.setState({
    //     done: this.state.done
    // });
  

   


  render() {
      const style = {
        fontWeight: this.state.done ? 'bold' : 'none',
        fontSize: this.state.done ? '20px' : 'none'
      }
     return (
       <ul>
       <li style={style} onMouseEnter={this.OnListItemMouseEnter.bind(this)}>{this.props.items[0]}</li>
       <li>{this.props.items[1]}</li>
       <li>{this.props.items[2]}</li>
       <li>{this.props.items[3]}</li>
       <li>{this.props.items[4]}</li>
      </ul>
      
      
      );
    }
  }



const App = (props) => (
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

