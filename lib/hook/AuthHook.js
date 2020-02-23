import PropTypes from 'prop-types'

const AuthHook = ({ children }) => (
  <>
    { children }
  </>
)

/**
 * Protypes For AuthHook
 */

AuthHook.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default AuthHook
