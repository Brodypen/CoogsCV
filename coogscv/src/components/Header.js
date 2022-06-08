import PropTypes from 'prop-types';

const Header = ({title}) => {
  return (
    <header>
        <h1>Hey {title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'CV',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header