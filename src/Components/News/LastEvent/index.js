import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { Box, Center, VStack, Button } from '@chakra-ui/react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react';
import { FaPlay } from 'react-icons';

const LastEvent = () => {
  const [volume, setVolume] = useState(0.05);
  const [previousVolume, setPreviousVolume] = useState(0.05);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSeek, setCurrentSeek] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [played, setPlayed] = useState(0);

  const RELATIVE_PLAYER_WIDTH = '50vw';

  const totalDurationFormat = () => {
    let minutes = 0;
    let videoSeconds = videoDuration ? videoDuration : 0;

    while (videoSeconds >= 60) {
      videoSeconds -= 60;
      minutes += 1;
    }

    if (videoSeconds < 10) {
      videoSeconds = `${0}${videoSeconds}`;
    }

    return `${minutes}:${videoSeconds}`;
  };

  const currentSeekFormat = () => {
    let minutes = 0;
    let seconds = currentSeek;

    while (seconds >= 60) {
      seconds -= 60;
      minutes += 1;
    }

    if (seconds < 10) {
      seconds = `${0}${seconds}`;
    }

    return `${minutes || 0}:${seconds}`;
  };

  return (
    <>
      <Center>
        <Box pt={2} pl={2} pr={2}>
          <ReactPlayer
            width={RELATIVE_PLAYER_WIDTH}
            url={
              'https://www.youtube.com/watch?v=4YnSk1gI_Oo&ab_channel=OIMArgentina'
            }
            volume={volume}
            playing={isPlaying}
            onProgress={(val) => {
              console.log(val);
              setCurrentSeek(parseInt(val.playedSeconds));
              setPlayed(val.played);
            }}
            onDuration={(seconds) => {
              setVideoDuration(seconds);
            }}
            onSeek={(val) => {
              console.log(val);
            }}
            progressInterval={500}
          />
        </Box>
      </Center>
      <Center>
        <VStack>
          <Center>
            <Box>
              <Slider aria-label='slider-ex-1' width={'45vw'} value={played}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              {`${currentSeekFormat()} / ${totalDurationFormat()}`}
            </Box>
          </Center>

          <Box bg={'gray'} width={RELATIVE_PLAYER_WIDTH} pl={2} pr={2} pb={2}>
            <Button
              size='xs'
              onClick={() => {
                setIsPlaying(!isPlaying);
              }}
            >
              {isPlaying ? 'Stop' : 'Play'}
            </Button>
            <Button
              size='xs'
              onClick={() => {
                if (volume === 0) {
                  setVolume(previousVolume);
                } else {
                  setVolume(0.1);
                  setVolume(0);
                }
              }}
            >
              A
            </Button>
            <Slider
              aria-label='slider-ex-1'
              defaultValue={0}
              onChange={(value) => {
                setVolume(value / 100);
                setPreviousVolume(value / 100);
              }}
              width={'5em'}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
        </VStack>
      </Center>
    </>
  );
};

export default LastEvent;
