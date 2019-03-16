//tests/counter.js
import React from 'react'
import 'react-testing-library/cleanup-after-each'
import {render, fireEvent} from 'react-testing-library'
import {useHooksOutside} from '../src/main'



test('reads and updates with default val', () => {

    const Button = () => <button>2</button>

    const App = useHooksOutside(()=>React.useMemo(()=>Button))

    const {container: con1} = render(<App initialVal={2} />)

    const button1 = con1.firstChild
    expect(button1.textContent).toBe('2')
})