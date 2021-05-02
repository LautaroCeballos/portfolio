import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, prettyDOM, render } from '@testing-library/react'
import Header from './index'

test('renders header', () => {
    const component = render(<Header />)

    const li = component.container.querySelector('li')
})

test('toddle header', () => {
    const component = render( <Header/>)
    
    const toggledHeader = component.getByRole('h1')

    const button = component.getByRole('button')
    fireEvent.click(button)
})