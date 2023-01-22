import './styles.css'

export const TestId = {
  Root: 'page-wrapper-root'
}

const PageWrapper = ({ children }) => {
  return (
    <div className='pageWrapper' data-testid={TestId.Root}>
      {children}
    </div>
  )
}

export default PageWrapper