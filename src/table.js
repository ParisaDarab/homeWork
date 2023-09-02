import React, { Component } from 'react';
import axios from 'axios'


export default class Table extends Component {
    state={
        users:[]
    }
    componentDidMount(){
     axios('https://jsonplaceholder.typicode.com/todos/1/users').then(Response=>this.setState({users:[...Response.data]}))  
       console.log(this.state.users);
    }

   
  render() {
    return (
      <div>
       <table>
        <tbody>
            <th>ID</th>
            <th>UserName</th>
            <th> Email </th>
          {
             this.state.users.map(
              user=><tr >
              <td style={{padding:'20px',textAlign:'center'}}>{user.id}</td>
               <td style={{padding:'20px',textAlign:'center'}}>{user.username}</td>
               <td style={{padding:'20px',textAlign:'center'}}>{user.email}</td>
              </tr>
           
             )
          }
          
         
        </tbody>
       </table>
      </div>
    )
  }
}
