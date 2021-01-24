import { Component } from 'react';
import {Users} from '../helpers/constants'
import User from '../components/User'



export default class UserList extends Component{
  render(){

    return (
          <section className='nameUsers'>
              {Users.map(elem => {
                  return <User key={elem.name} name={elem.name}/>
              })}
          </section>
          
      )
  }
 }
