import { Container, Box, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const SetupSkeleton = ({ marginTop, padding, boxShadow, bg, mt, height, size, noOfLines, spacing }) => {

    return (
        <Container marginTop={marginTop}>
            <Box padding={padding} boxShadow={boxShadow} bg={bg}>
                <Skeleton mt={mt} height={height} />
                <SkeletonCircle mt={mt} size={size} />
                <SkeletonText mt={mt} noOfLines={noOfLines} spacing={spacing} />
            </Box>
        </Container>
    )
}

export default SetupSkeleton;