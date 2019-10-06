import PropTypes from 'prop-types'
import styled from '@emotion/styled'

export const ClockContainer = styled.div`
  text-align: center;
  transition: color 250ms;
`

ClockContainer.propTypes = {
  color: PropTypes.string.isRequired,
}
