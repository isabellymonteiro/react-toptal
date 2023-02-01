import { useRef } from "react"
import ForwardRefExample from "./ForwardRefExample"

const UseRefExample = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  return (
    <div className="flex-column small-gap">
      <h1>useRef and forwardRef</h1>
      <ForwardRefExample
        ref={videoRef}
        src="haim-gasoline-jimmy-kimmel-live.mp4"
        type="video/mp4"
        width="600"
        title="Haim playing Gasoline at Jimmy Kimmel Live"
      />
      <button onClick={() => videoRef?.current?.play()}>
        Play
      </button>
      <button onClick={() => videoRef?.current?.pause()}>
        Pause
      </button>
    </div>
  )
}

export default UseRefExample