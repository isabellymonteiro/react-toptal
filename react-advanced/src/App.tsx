import UseCallbackExample from './components/UseCallbackExample'
import UseMemoExample from './components/UseMemoExample'
import UseRefExample from './components/Ref/UseRefExample'
import ClickCounter from './components/HighOrderComponent/ClickCounter'
import HoverCounter from './components/HighOrderComponent/HoverCounter'
import PortalExample from './components/Portal/PortalExample'
import UncontrolledForm from './components/ControlledVsUncontrolled/UncontrolledForm'
import ControlledForm from './components/ControlledVsUncontrolled/ControlledForm'
import CounterWrapper from './components/RenderProps/CounterWrapper'
import RenderPropsClickCounter from './components/RenderProps/ClickCounter'
import RenderPropsHoverCounter from './components/RenderProps/HoverCounter'

import './App.css'

const App = () => {
  // to test ErrorBoundary:
  // throw Error("oops")

  return (
    // uncomment one example component below

    // <UseMemoExample />

    // <UseCallbackExample />

    <UseRefExample />

    /*
      <>
        <ClickCounter />
        <HoverCounter />
      </>
    */

    // <PortalExample />

    // <UncontrolledForm />
    // <ControlledForm />

    /*
      <>
        <CounterWrapper
          render={(count, incrementCount) => {
            return <RenderPropsClickCounter count={count} incrementCount={incrementCount} />
          }}
        />
        <CounterWrapper
          render={(count, incrementCount) => {
            return <RenderPropsHoverCounter count={count} incrementCount={incrementCount} />
          }}
        />
      </>
    */
  )
}
  

export default App
