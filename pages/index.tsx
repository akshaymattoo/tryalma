import Head from "next/head";
import { Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Button, } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/react';



export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Alma</title>
        <meta name="description" content="Alma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bg="#D9DEA5">
        <Stack spacing={3} textAlign="center" width="75%">
          <Text fontSize='6xl' width="100%">Immigration made easy!</Text>
          <Text fontSize='2xl' width="65%" mx="auto">Alma simplifies immigration for technologists, founders, and researchers with our top legal talent and user-friendly platform.</Text>
          <Button bg="black"
            color="white"
            _hover={{ bg: "gray.700" }}
            borderRadius="50" width="30%" mx="auto" onClick={() => router.push('/assesment')}>Start assessment of your case!</Button>
        </Stack>
      </Box>
    </>
  );
}
