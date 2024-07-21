import { Box, Button, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import React from 'react'

const index = () => {
    const router = useRouter();

    return (
        <>
            <Box position="relative" width="100%">
                <Image src="/assessment_header.jpg" alt="Description of image" width="100%" />
                <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="black" textAlign="left">
                    <Text fontSize='5xl' fontWeight="bold">Get an assessment</Text>
                    <Text fontSize='5xl' fontWeight="bold">of your immigration case</Text>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" minHeight="10vh" width={'90%'}>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" >
                    <Image src="/file-info.png" alt="Description of image" />
                    <Text fontSize='4xl' fontWeight={'bold'}>Thank You</Text>
                    <Text fontSize='2xl' fontWeight={'bold'} width={'60%'} mb={10}>Your information was submitted to our team of immigration attorneys. Expect an email from hello@tryalma.ai.</Text>

                    <Button bg="black"
                        color="white"
                        _hover={{ bg: "gray.700" }}
                        borderRadius="md" width="30%" p={6} fontWeight='bold' mx="auto" onClick={() => router.push('/')}>Go Back to Homepage</Button>
                </Box>
            </Box >
        </>
    )
}

export default index
