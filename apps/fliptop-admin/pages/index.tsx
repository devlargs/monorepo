import { ChakraProvider, Box } from '@chakra-ui/react';

export function Index() {
  return (
    <ChakraProvider>
      <Box bg="#EE46BC" w="100%" p={4} color="white">
        This is the Box
      </Box>
    </ChakraProvider>
  );
}

export default Index;
