import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
   const newChild = React.cloneElement(child, {
      on, toggle
    })
    console.log('child',child)
    console.log('newChild',newChild)
    return newChild
  })
 
}

// Accepts `on` and `children` props and returns `children` if `on` is true
const ToggleOn = ({on, children}) => on ? children : null

// Accepts `on` and `children` props and returns `children` if `on` is false
const ToggleOff = ({on, children}) => on ? null : children

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
