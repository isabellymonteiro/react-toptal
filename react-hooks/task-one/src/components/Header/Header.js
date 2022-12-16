import './styles.css'

const Header = ({ title, subtitle }) => {
  return (
    <header className='header'>
      <h1 className='header__title'>{title}</h1>
      <h2 className='header__subtitle'>{subtitle}</h2>
    </header>
  )
}

export default Header