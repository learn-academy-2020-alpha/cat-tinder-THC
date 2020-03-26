import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from '../CatShow'
import cats from '../../cats'

Enzyme.configure({ adapter: new Adapter() })

it('CatShow renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CatShow match = {{params: {id: 1}}} />, div)
  })

it('Shows one cat', () => {
    const component = mount(<CatShow cats = {cats.id} match = {{params: {id: 1}}}/>)
    expect(component.find('cats#id')).toBe(1)
})
