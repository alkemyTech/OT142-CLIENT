import { Box, Flex, Heading } from "@chakra-ui/react";
import {
    //LinkedinProfile,
    TwitterTweet
} from 'react-social-plugins';

const SocialMediaWidgets = () => {
    return (
        <Box m='4'>
            <Heading as='h2' size='md'>Últimos tweets</Heading>
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
                {/* <LinkedinProfile
                    lang="en_US"
                    profileUrl="https://www.linkedin.com/in/somos-m%C3%A1s-ong-215424234/"
                    format="inline" // Or "hover"
                    text="Somos más" // text to show in "hover" format
                /> */}
            </Flex>
        </Box>
    )
}
export default SocialMediaWidgets;