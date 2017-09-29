import {css} from 'glamor'

export const OverlayLayout = css({
  position: 'absolute',
  width: '100%',
  height: '100vh',
  top: 0,
  left: 0,
  zIndex: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const OverlayBackground = css({
  width: '100vw',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
