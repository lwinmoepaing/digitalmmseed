/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import YouTube from 'react-youtube'

const Youtube = ({ url = 'https://youtu.be/bYHNiaTVfso' }) => {
  const opts = {
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }

  const defindUrl = url.split('/')
  const lastUrl = defindUrl[defindUrl.length - 1]

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  return (
    <YouTube
      videoId={lastUrl.includes('watch?v=') ? lastUrl.replace('watch?v=', '') : lastUrl}
      opts={opts}
      onReady={_onReady}
    />
  )
}


export default Youtube
