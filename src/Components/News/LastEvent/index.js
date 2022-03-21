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
  SliderThumb
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

  const handleDuration = (duration) => {
    setVideoDuration(duration);
  };

  const handleMouseOver = () => {
    console.log('sep');
  };

  const proportionalSeek = (currentSeek) => {
    if (videoDuration === 0) {
      return 0;
    }
    return (currentSeek / videoDuration) * 100;
  };

  const handleClickFullScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.request(player.wrapper);
    }
  };

  let player = null;

  const ref = (p) => {
    player = p;
  };

  const PLAYER_WIDTH = '50vw';

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
        <Box width={'auto'} display={'flex'}>
          <Box position={'relative'}>
            <ReactPlayer
              ref={ref}
              width={PLAYER_WIDTH}
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
          <Box
            position={'absolute'}
            top={0}
            left={0}
            right={0}
            bottom={0}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'flex-end'}
            zIndex={20}
            onMouseOver={handleMouseOver}
          >
            <VStack>
              {/* SLIDER SEEK */}
              <Slider
                aria-label='slider-ex-1'
                width={'45vw'}
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
                width={'45vw'}
                pb={2}
              >
                <Box>
                  <Button
                    size='xs'
                    onClick={() => {
                      setIsPlaying(!isPlaying);
                    }}
                    mr='1vw'
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
                    ml='1vw'
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </Box>
                <Box display='inline-flex' width='auto'>
                  {`${currentSeekFormat()} / ${totalDurationFormat()}`}
                  <Button size='xs' ml='1vw' onClick={handleClickFullScreen}>
                    O
                  </Button>
                </Box>
              </Box>
            </VStack>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default LastEvent;
