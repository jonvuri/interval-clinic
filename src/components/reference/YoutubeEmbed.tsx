import React, { memo, useEffect, useRef, useState } from 'react'
import YouTubePlayer from 'youtube-player'

import { ReferenceSong } from './types'

const usePrevious = <T extends unknown>(value: T): T | undefined => {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

type YTPlayer = ReturnType<typeof YouTubePlayer>

type Props = {
  song: ReferenceSong
  onPlayerReady: (player: YTPlayer) => void
}

const YoutubeEmbed = ({ song, onPlayerReady }: Props) => {
  const previousSong = usePrevious(song)
  const [startingSong] = useState(song)
  const iframeEl = useRef<HTMLIFrameElement | null>(null)
  const [player, setPlayer] = useState<YTPlayer | null>(null)

  useEffect(() => {
    if (iframeEl.current) {
      const player = YouTubePlayer('youtube-replace', {
        width: '288',
        height: '162',
        videoId: startingSong.youtubeId,
        playerVars: {
          autoplay: 1,
          modestbranding: 1,
          start: startingSong.youtubeStart,
        },
      })

      setPlayer(player)
      onPlayerReady(player)
    }
  }, [iframeEl, onPlayerReady, startingSong])

  useEffect(() => {
    if (player && song !== previousSong) {
      player.loadVideoById(song.youtubeId, song.youtubeStart)
    }
  }, [player, song, previousSong])

  return <div ref={iframeEl} id="youtube-replace" />
}

export default memo(YoutubeEmbed)
