/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import {
  Box,
  Center,
  VStack,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  useBreakpoint
} from '@chakra-ui/react';
import screenfull from 'screenfull';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { MdOutlineFullscreen } from 'react-icons/md';

const VideoPlayer = ({ video }) => {
  const [volume, setVolume] = useState(0.05);
  const [previousVolume, setPreviousVolume] = useState(0.05);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSeek, setCurrentSeek] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [opacity, setOpacity] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleDuration = (duration) => {
    setVideoDuration(duration);
  };

  const handleMouseOver = (isPlaying) => {
    setOpacity(100);
  };

  const handleMouseLeave = (isPlaying) => {
    if (isPlaying) {
      setOpacity(0);
    }
  };

  const handleClickFullScreen = () => {
    setIsFullscreen(!isFullscreen);
    if (screenfull.isEnabled) {
      screenfull.request(player.wrapper);
    }
  };

  const proportionalSeek = (currentSeek) => {
    if (videoDuration === 0) {
      return 0;
    }
    return (currentSeek / videoDuration) * 100;
  };

  let player = null;

  const ref = (p) => {
    player = p;
  };

  const PLAYER_WIDTH = '75vw';
  const PLAYER_HEIGHT = '50vh';
  const SEEK_SLIDER_WIDTH = '70vw';

  const totalDurationFormat = () => {
    let minutes = 0;
    let videoSeconds = videoDuration;

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
      {isFullscreen ? <Box width='100%' bg={'red'} zIndex={'999'}></Box> : null}
      <Box position='relative' width='100%'>
        <Center>
          <ReactPlayer
            ref={ref}
            width={PLAYER_WIDTH}
            height={PLAYER_HEIGHT}
            url={video}
            volume={volume}
            playing={isPlaying}
            onProgress={(val) => {
              setCurrentSeek(parseInt(val.playedSeconds));
            }}
            onSeek={() => {
              setIsPlaying(true);
            }}
            progressInterval={500}
            onDuration={handleDuration}
            controls={false}
          />

          <Box
            left={0}
            right={0}
            bottom={0}
            margin={'auto'}
            display={'flex'}
            width={PLAYER_WIDTH}
            height={PLAYER_HEIGHT}
            flexDirection={'column'}
            position={'absolute'}
            justifyContent={'flex-end'}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <VStack opacity={opacity}>
              <Slider
                aria-label='slider-ex-1'
                width={SEEK_SLIDER_WIDTH}
                position={'absolute'}
                value={proportionalSeek(currentSeek)}
                onChange={(value) => {
                  player?.seekTo(value / 100, 'fraction');
                }}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>

              <Box
                display={'inline-flex'}
                justifyContent='space-between'
                width={PLAYER_WIDTH}
                pb={2}
                pt={2}
                bg={'white'}
                border='1px'
                borderColor='gray.400'
                alignItems={'center'}
              >
                <Box>
                  <Button
                    size='s'
                    onClick={() => {
                      setIsPlaying(!isPlaying);
                      setTimeout(() => {
                        setOpacity(0);
                      }, 3000);
                    }}
                    mr='1vw'
                    ml='1vw'
                    variant='ghost'
                  >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </Button>
                  <Button
                    size='s'
                    onClick={() => {
                      if (volume === 0) {
                        setVolume(previousVolume);
                      } else {
                        setVolume(0.1);
                        setVolume(0);
                      }
                    }}
                    variant='ghost'
                  >
                    <Box>
                      {volume !== 0 ? <FaVolumeUp /> : <FaVolumeMute />}
                    </Box>
                  </Button>
                  <Slider
                    aria-label='slider-ex-1'
                    defaultValue={previousVolume}
                    onChange={(value) => {
                      setVolume(value / 100);
                      setPreviousVolume(value / 100);
                    }}
                    width={'5em'}
                    ml='1vw'
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </Box>

                <Box display='inline-flex' width='auto'>
                  <Text>
                    {`${currentSeekFormat()} / ${totalDurationFormat()}`}
                  </Text>
                  <Button
                    size='s'
                    ml='1vw'
                    mr='1vw'
                    onClick={handleClickFullScreen}
                    variant='ghost'
                  >
                    <MdOutlineFullscreen />
                  </Button>
                </Box>
              </Box>
            </VStack>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default VideoPlayer;
