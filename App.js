import './App.css';
import { Component } from 'react';
import Person from '../person/person'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      data: [
        {id:123, name: 'Maxim', phone: '89185476866', career: 'Mehanizator', email: 'iximusmmaxim@yandex.ru', meeting: '18.04 - 16:00'},
        {id:1234, name: 'Anna', phone: '89184407146', career: 'Dom', email: 'AnnaHohlova@yandex.ru', meeting: '20.04 - 14:00'},
        {id:12345, name: 'Nikolay', phone: '89181706219', career: 'Uchenik', email: 'KolyaTikhonov@yandex.ru', meeting: ''},
        {id:123456, name: 'Evgeniy', phone: '89296556767', career: 'Police', email: 'Ehohlov1000@mail.ru', meeting: ''}
      ]
    }
  }
  onValueChange = (id, value) => {
    this.setState (({data}) => {
      // const item = data.find (item => item.id === id)
      // const newItem = {...item, meeting: value}
      // const index = data.indexOf(item)
      // const newData = [...data.slice (0, index), newItem, data.slice (index + 1, data.length)]
      // return{
      //   data: newData
      // }
    })
  }

  render (){
    const {data} = this.state
    const personList = data.map(item => {
      return <Person {...item} key = {item.id} onValueChange = {(id, value) => this.onValueChange (id, value)} />
    })
  return (
    <table class="responsive-table">
        <thead>
          <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Career</th>
              <th>Email</th>
              <th>Meeting</th>
          </tr>
        </thead>
        <tbody>
           {personList}
        </tbody>
      </table>
    );
  }
}

export default App;
