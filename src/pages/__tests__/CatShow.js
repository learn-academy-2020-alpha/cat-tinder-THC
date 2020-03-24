import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from '../CatShow'
import cats from '../../cats'

Enzyme.configure({ adapter: new Adapter() })

it('CatShow renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CatShow />, div)
  })
  
it('Shows one cat', () => {
    const component = mount(<CatShow cats = {cats.id}/>)
    expect(component.find('2').toBe(2))
})