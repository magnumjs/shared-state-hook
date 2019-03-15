// __tests__/counter.js
import React from 'react'
import 'react-testing-library/cleanup-after-each'
import {render, fireEvent} from 'react-testing-library'
import {CounterVal, CounterObj, CounterFunVal, CounterFunObj} from './counter.js'



test('reads and updates with default val', () => {
    const {container: con1} = render(<CounterVal initialVal={2} />)

    const {container: con2} = render(<CounterVal initialVal={3} />)

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
    const {container} = render(<CounterVal />)
    const button = container.firstChild
    expect(button.textContent).toBe('4')
    fireEvent.click(button)
    expect(button.textContent).toBe('5')
    fireEvent.click(button)
    expect(button.textContent).toBe('6')
})


test('reads and updates with default val with function', () => {
    const {container: con1} = render(<CounterFunVal initialVal={2} />)

    const {container: con2} = render(<CounterFunVal initialVal={3} />)

    const button1 = con1.firstChild
    expect(button1.textContent).toBe('2')
    const button2 = con2.firstChild
    expect(button2.textContent).toBe('2')
    fireEvent.click(button1)

    expect(button2.textContent).toBe('3')
    fireEvent.click(button2)
    expect(button2.textContent).toBe('4')
})

test('counter has the previous states value with function', () => {
    const {container} = render(<CounterFunVal />)
    const button = container.firstChild
    expect(button.textContent).toBe('4')
    fireEvent.click(button)
    expect(button.textContent).toBe('5')
    fireEvent.click(button)
    expect(button.textContent).toBe('6')
})


test('reads and updates with default val object', () => {
    const initialVal = {count: 2}
    const {container: con1} = render(<CounterObj initialVal={initialVal} />)
    initialVal.count=3
    const {container: con2} = render(<CounterObj initialVal={initialVal} />)

    const button1 = con1.firstChild
    expect(button1.textContent).toBe('2')
    const button2 = con2.firstChild
    expect(button2.textContent).toBe('2')
    fireEvent.click(button1)

    expect(button1.textContent).toBe('3')
    expect(button2.textContent).toBe('3')
    fireEvent.click(button2)
    expect(button2.textContent).toBe('4')
    expect(button1.textContent).toBe('4')
})

test('counter has the previous states value object', () => {
    const {container} = render(<CounterObj />)
    const button = container.firstChild
    expect(button.textContent).toBe('4')
    fireEvent.click(button)
    expect(button.textContent).toBe('5')
    fireEvent.click(button)
    expect(button.textContent).toBe('6')
})


test('reads and updates with default val object and function', () => {
    const initialVal = {count: 2}
    const {container: con1} = render(<CounterFunObj initialVal={initialVal} />)
    initialVal.count=3
    const {container: con2} = render(<CounterFunObj initialVal={initialVal} />)

    const button1 = con1.firstChild
    expect(button1.textContent).toBe('2')
    const button2 = con2.firstChild
    expect(button2.textContent).toBe('2')
    fireEvent.click(button1)

    expect(button1.textContent).toBe('3')
    expect(button2.textContent).toBe('3')
    fireEvent.click(button2)
    expect(button2.textContent).toBe('4')
    expect(button1.textContent).toBe('4')
})

test('counter has the previous states value object and function', () => {
    const {container} = render(<CounterFunObj />)
    const button = container.firstChild
    expect(button.textContent).toBe('4')
    fireEvent.click(button)
    expect(button.textContent).toBe('5')
    fireEvent.click(button)
    expect(button.textContent).toBe('6')
})

