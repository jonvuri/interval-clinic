import React, { useCallback, useContext, useState, KeyboardEvent } from 'react'
import { YouTubePlayer } from 'youtube-player/dist/types'

import { Interval, IntervalContext } from '../../intervals'

import { SORT, ReferenceSong, ReferenceMap } from './types'
import PlayPauseButton from './PlayPauseButton'
import YoutubeEmbed from './YoutubeEmbed'

import styles from './Base.module.css'

const Base = (interval: Interval, referenceMap: ReferenceMap) => {
  const Reference = () => {
    const intervals = useContext(IntervalContext)

    const [selectedSong, setSelectedSong] = useState<ReferenceSong | null>(null)
    const [player, setPlayer] = useState<YouTubePlayer | null>(null)
    const [playing, setPlaying] = useState<boolean>(false)

    const handlePlayerReady = useCallback(
      (newPlayer: YouTubePlayer) => {
        setPlayer(newPlayer)
      },
      [setPlayer]
    )

    const handleClickSong = (song: ReferenceSong) => () => {
      if (selectedSong === song) {
        if (playing) {
          player?.pauseVideo()
          setPlaying(false)
        } else {
          player?.playVideo()
          setPlaying(true)
        }
      } else {
        setSelectedSong(song)
        setPlaying(true)
      }
    }

    const handleKeypress = (song: ReferenceSong) => (
      event: KeyboardEvent<HTMLDivElement>
    ) => {
      if (event.key === 'Enter' || event.key === ' ') {
        if (selectedSong === song) {
          if (playing) {
            player?.pauseVideo()
            setPlaying(false)
          } else {
            player?.playVideo()
            setPlaying(true)
          }
        } else {
          setSelectedSong(song)
          setPlaying(true)
        }
      }
    }

    return (
      <div className={styles.container}>
        <div className={styles.ascending}>
          <div className={styles.header}>
            <div
              className={styles.headerIcon}
              style={{ color: intervals[interval].color }}
            >
              🡥
            </div>
            <div className={styles.headerText}>Ascending references</div>
          </div>
          <div className={styles.contents}>
            {Object.entries(referenceMap.ascending)
              .sort(([genreA], [genreB]) => SORT[genreA] - SORT[genreB])
              .map(([genre, songs]) =>
                songs ? (
                  <div key={genre} className={styles.genre}>
                    <div className={styles.genreLabel}>{genre}</div>

                    <div className={styles.genreSongs}>
                      {songs.map((song) => (
                        <div
                          className={styles.song}
                          role="button"
                          tabIndex={0}
                          key={song.youtubeId}
                          onClick={handleClickSong(song)}
                          onKeyPress={handleKeypress(song)}
                        >
                          <div className={styles.songInfo}>
                            <div className={styles.songTitle}>{song.title}</div>
                            <div className={styles.songArtist}>
                              {song.artist}
                            </div>
                          </div>
                          <div
                            className={`${styles.playPauseButton}${
                              selectedSong === song && playing
                                ? ` ${styles.playing}`
                                : ''
                            }`}
                          >
                            <PlayPauseButton
                              playing={selectedSong === song && playing}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null
              )}
          </div>
        </div>
        <div className={styles.player}>
          {selectedSong && (
            <>
              <div className={styles.youtubeContainer}>
                <YoutubeEmbed
                  song={selectedSong}
                  onPlayerReady={handlePlayerReady}
                />
              </div>
              {selectedSong.youtubeNote && (
                <div className={styles.youtubeNote}>
                  {selectedSong.youtubeNote}
                </div>
              )}
              <div className={styles.description}>
                {selectedSong.description}
              </div>
            </>
          )}
        </div>
        <div className={styles.descending}>
          <div className={styles.header}>
            <div
              className={styles.headerIcon}
              style={{ color: intervals[interval].color }}
            >
              🡦
            </div>
            <div className={styles.headerText}>Descending references</div>
          </div>
          <div className={styles.contents}>
            {Object.entries(referenceMap.descending)
              .sort(([genreA], [genreB]) => SORT[genreA] - SORT[genreB])
              .map(([genre, songs]) =>
                songs ? (
                  <div key={genre} className={styles.genre}>
                    <div className={styles.genreLabel}>{genre}</div>

                    <div className={styles.genreSongs}>
                      {songs.map((song) => (
                        <div
                          className={styles.song}
                          key={song.youtubeId}
                          role="button"
                          tabIndex={0}
                          onClick={handleClickSong(song)}
                          onKeyPress={handleKeypress(song)}
                        >
                          <div className={styles.songInfo}>
                            <div className={styles.songTitle}>{song.title}</div>
                            <div className={styles.songArtist}>
                              {song.artist}
                            </div>
                          </div>
                          <div
                            className={`${styles.playPauseButton}${
                              selectedSong === song && playing
                                ? ` ${styles.playing}`
                                : ''
                            }`}
                          >
                            <PlayPauseButton
                              playing={selectedSong === song && playing}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null
              )}
          </div>
        </div>
      </div>
    )
  }

  return Reference
}

export default Base
