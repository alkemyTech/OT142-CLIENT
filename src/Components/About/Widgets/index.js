import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import {
  LinkedinFollowCompany,
  TwitterTweet
} from 'react-social-plugins';

const SocialMediaWidgets = () => {
  return (
        <Box m='4'>
            <Heading as='h2' size='md'>Redes sociales</Heading>
            <Flex justifyContent='end' alignItems='end' flexDirection='column' me='4'>
                <LinkedinFollowCompany
                    companyId={3144678}
                    counter="top"
                    lang="es_AR"
                />
            </Flex>
            <Flex p='3' justifyContent='center' alignItems='center' alignContent='center'>
                <TwitterTweet
                    align='left'
                    coversation='none'
                    tweetId='1493244901093515271'
                    theme='light'
                    width={325}
                />

                <TwitterTweet
                    align='left'
                    coversation='none'
                    tweetId='1493243878916427778'
                    theme='light'
                    width={325}
                />
            </Flex>
        </Box>
  );
};
export default SocialMediaWidgets;
