import {css} from 'glamor'

// Color values should be used from the shared components library once imported
// import {colors} from 'components'

export const ExampleContainer = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#178cd3',
  background: 'linear-gradient(left top, #7bd4e7, #178cd3)',
  height: '100vh'
})

export const ExampleForm = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  height: 200
})

export const BaseInput = css({
  width: 220,
  height: 25,
  border: 'none',
  borderWidth: 2,
  borderStyle: 'solid',
  borderRadius: 0,
  transition: 'border-color 0.2s ease',
  background: '#ffffff',
  padding: 10,
  margin: 20,
  fontSize: '1.1em'
})

export const BasicButton = css({
  padding: 10,
  minWidth: 220,
  backgroundColor: '#f18300',
  borderColor: '#f18300',
  borderStyle: 'solid',
  borderRadius: 50,
  fontFamily: 'inherit',
  fontWeight: 'bold',
  fontSize: '1em',
  transition: 'opacity 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease',
  ':active': {
    transition: 'opacity 0s ease, border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease',
    opacity: 0.8
  },
  '&:focus:not(:active)': {
    boxShadow: `0 0 2px 0 #178cd3`
  }
})
