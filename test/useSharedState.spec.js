// __tests__/counter.js
import React from 'react'
import 'react-testing-library/cleanup-after-each'
import {render, fireEvent} from 'react-testing-library'
import Counter from './counter.js'



test('reads and updates with default val', () => {
    const {container: con1} = render(<Counter initialVal={2} />)

    const {container: con2} = render(<Counter initialVal={3} />)

    const button1 = con1.firstChild
    expect(button1.textContent).toBe('2')
    const button2 = con2.firstChild
    expect(button2.textContent).toBe('2')
    fireEvent.click(button1)

    expect(button2.textContent).toBe('3')
    fireEvent.click(button2)
    expect(button2.textContent).toBe('4')
})

test('counter has the previous states value', () => {
    const {container} = render(<Counter />)
    const button = container.firstChild
    expect(button.textContent).toBe('4')
    fireEvent.click(button)
    expect(button.textContent).toBe('5')
    fireEvent.click(button)
    expect(button.textContent).toBe('6')
})

