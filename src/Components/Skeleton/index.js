import "./skeleton.css"
import { Container, Box, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const SetupSkeleton = ({ boxShadow, bg, height, size, noOfLines, spacing }) => {

    const skeleton = ["skeleton", "circle", "text", "text", "text"]

    return (
        <Container>
            <Box className="box" boxShadow={boxShadow} bg={bg}>
                {
                    skeleton.map((type) => {
                        if (type === "skeleton") {
                            return <Skeleton height={height} />
                        } else if (type === "circle") {
                            return <SkeletonCircle size={size} />
                        } else {
                            return <SkeletonText noOfLines={noOfLines} spacing={spacing} />
                        }
                    })
                }
            </Box>
        </Container>
    )
}

export default SetupSkeleton;


// EJEMPLO PARA IMPORTAR EL COMPONENTE: <SetupSkeleton height={200} size={50} boxShadow="lg" bg="white" noOfLines={3} spacing={3} />
