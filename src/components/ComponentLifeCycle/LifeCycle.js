import React,{Component} from 'react'
import './LifeCycle.css'
export class LifeCycle extends Component{
  constructor(props){
  super(props);
  this.state = {
  items: [],
  DataisLoaded: false
};
  }
  componentDidMount(){
    fetch('https://acb-api.algoritmika.org/api/transaction ')
    .then(res => res.json())
    .then(data => {
    this.setState({
        items: data,
        DataisLoaded: true
    });
    // console.log(data)
    })
  }
  render(){
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
        <h1> Please wait some time.... </h1> </div> ;
         items.forEach((item)=>(console.log(item.to)))
const mydemo=items.map((item)=>{
    return(
        <tr>
        <td>{item.from}</td>
        <td>{item.to}</td>
        <td>{item.amount}</td>
      </tr>  
    )
})
return(
      <>
 
      <table>
        <thead>
        <tr>
          <th><h1>Göndərən</h1></th>
          <th><h1>Alan</h1></th>
          <th><h1>Məbləğ</h1></th>
        </tr>
        </thead>
        <tbody>
       {mydemo}
  </tbody>

      </table>
      
    </>
)



  }
}
