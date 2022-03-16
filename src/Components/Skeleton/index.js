import './skeleton.css';
import { Container, Box, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const SkeletonGroup = ({ skeletonItems = ['block', 'text', 'circle'], boxShadow = 'lg', bg = 'white', height = 200, size = 50, noOfLines = 2, spacing = 3 }) => {
  return (
        <Container>
            <Box className="box" boxShadow={boxShadow} bg={bg}>
                {
                    skeletonItems.map((type) => {
                      if (type === 'block') {
                        return <Skeleton height={height} />;
                      } else if (type === 'circle') {
                        return <SkeletonCircle size={size} />;
                      } else {
                        return <SkeletonText noOfLines={noOfLines} spacing={spacing} />;
                      }
                    })
                }
            </Box>
        </Container>
  );
};

export default SkeletonGroup;
