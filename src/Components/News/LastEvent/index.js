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

  const RELATIVE_PLAYER_WIDTH = '50vw';

  return (
    <>
      <Center>
        <Box pt={2} pl={2} pr={2}>
          <ReactPlayer
            width={RELATIVE_PLAYER_WIDTH}
            url={'https://youtu.be/HQ_TD6dFpE0'}
            volume={volume}
            playing={isPlaying}
          />
        </Box>
      </Center>
      <Center>
        <VStack>
          <Center>
            <Box>
              <Slider
                aria-label='slider-ex-1'
                width={RELATIVE_PLAYER_WIDTH}
                defaultValue={30}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
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
