import { useState } from "react"
import { createPortal } from "react-dom"
import Modal from "./Modal";

const PortalExample = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex-column small-gap">
      <button onClick={() => setShowModal(prev => !prev)}>
        Show modal using a portal
      </button>
      {showModal && createPortal(
        <Modal onClose={() => setShowModal(prev => !prev)} />,
        document.body
      )}
    </div>
  )
}

export default PortalExample