import React, { Component } from 'react'

 export default class App extends Component {
   constructor(){
     super()
     this.state={
       items:[],
       isloaded:false
    }
   }
   componentDidMount(){
     fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json())
     .then((json)=>{
       this.setState({
         items:json,
         isloaded:true
       })
     })
   }
   render() {
     const{isloaded,items}=this.state;
     if(!isloaded)
     return(<div>
 <h1>please wait some time</h1>
     </div>)
     return (
       <div>
      {items.map((item)=>(

     <ol key={item.id}>
       <div>
         <strong>
           {"user_name"}
         </strong>
         {item.username}
       </div>
       <div>
         <strong>
           {"email"}
         </strong>
         {item.email}
       </div>
     </ol>
      ))}
       </div>
     )
   }
 }
