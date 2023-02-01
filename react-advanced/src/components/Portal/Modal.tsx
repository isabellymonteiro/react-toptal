interface ModalProps {
  onClose: () => void
}

const Modal = ({ onClose }: ModalProps) => (
  <div className="modal">
    <p>I'm a modal</p>
    <button onClick={onClose}>Close</button>
  </div>
)

export default Modal