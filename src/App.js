import React,{Component} from "react";
// import ExtraFolder from "./components/ExtraFolder/ExtraFolder";
// import  ClientCard  from "./components/Main/ClientCard";
// import FetchClients   from "./components/Main/FetchClients";
import { LifeCycle } from "./components/ComponentLifeCycle/LifeCycle";
class App extends Component {
  //   state = {
  //     client: null,
  //   }

  // componentDidMount = () => {
  //   FetchClients().then((client) => {
  //     this.setState({
  //       client
  //     });
  //   });
  // };
  render() {
// const data =this.state.client;
// return(
//   <>
//   {data ? <ClientCard name={data.name} phone={data.phone} card={data.card} /> : null}
//   </>
//  )

return(
  // <ExtraFolder />

  <LifeCycle />
)

  }
}

export default App;