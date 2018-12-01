import PropTypes from 'prop-types'
import styled from 'styled-components'

const transition = 'color 250ms'

export const ClockContainer = styled.div`
  text-align: center;
  transition: ${transition};
`

ClockContainer.propTypes = {
  color: PropTypes.string.isRequired
}
