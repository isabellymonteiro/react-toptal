import { forwardRef, Ref } from 'react'

interface ForwardRefExampleProps {
  src: string
  type: string
  width: string
  title: string
}

const ForwardRefExample = forwardRef((
  { src, type, width, title }: ForwardRefExampleProps,
  ref: Ref<HTMLVideoElement>
) => (
  <video width={width} ref={ref} title={title}>
    <source
      src={src}
      type={type}
    />
  </video>
))

export default ForwardRefExample
