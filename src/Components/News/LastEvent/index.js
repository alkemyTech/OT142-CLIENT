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
  Text
} from '@chakra-ui/react';
import screenfull from 'screenfull';
// 1- Fullscreen
// 2-  Cambiar Iconos
// 3- Responsivesness

const LastEvent = () => {
  const [volume, setVolume] = useState(0.05);
  const [previousVolume, setPreviousVolume] = useState(0.05);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSeek, setCurrentSeek] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [opacity, setOpacity] = useState(100);

  const handleDuration = (duration) => {
    setVideoDuration(duration);
  };

  const handleClick = (e) => {
    // if (isPlaying) {
    //   setOpacity(100);
    //   setTimeout(() => {
    //     setOpacity(0);
    //   });
    // }
    console.log(e);
    console.log(window.innerWidth);
  };

  const handleMouseEnter = (isPlaying) => {
    setOpacity(100);
  };

  const handleMouseLeave = (isPlaying) => {
    setOpacity(0);
  };

  const handleClickFullScreen = () => {
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

  const config = {
    youtube: {
      playerVars: { modestbranding: 1 }
    }
  };

  return (
    <>
      <Center>
        <Center>
          <Box>
            <ReactPlayer
              ref={ref}
              width={PLAYER_WIDTH}
              height={PLAYER_HEIGHT}
              url={'https://www.youtube.com/watch?v=NO7EtdR3Dyw'}
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
              config={config}
            />
          </Box>
        </Center>

        <Box
          left={0}
          right={0}
          bottom={0}
          margin={'auto'}
          display={'flex'}
          width={PLAYER_WIDTH}
          height={PLAYER_HEIGHT}
          flexDirection={'column'}
          justifyContent={'flex-end'}
          position={'absolute'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
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
              bg={'lightgrey'}
            >
              <Box>
                <Button
                  size='xs'
                  onClick={() => {
                    setIsPlaying(!isPlaying);
                  }}
                  mr='1vw'
                  ml='1vw'
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
                  size='xs'
                  ml='1vw'
                  mr='1vw'
                  onClick={handleClickFullScreen}
                >
                  O
                </Button>
              </Box>
            </Box>
          </VStack>
        </Box>
      </Center>
    </>
  );
};

export default LastEvent;
