import {css} from 'glamor'

export const Spinner = css({
  position: 'fixed',
  width: '100%',
  height: '100%',
  zIndex: '9999',
  top: 0,
  left: 0,
  background: '#fff',
  opacity: '0.8',
  ' img': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 80,
    height: 80,
    marginTop: -50,
    marginLeft: -50
  }
})
