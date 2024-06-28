import React from "react";
import { VStack, Box, Heading } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
const PaymentSuccess = () => {
  const search = useSearchParams()[0];
  const refrenceNum = search.get("reference");
  return (
    <Box>
      <VStack h="100vh" justifyContent={"center"}>
        <Heading textTransform={"uppercase"}>Order Successfully</Heading>
        <Text>Reference No. {refrenceNum}</Text>
      </VStack>
    </Box>
  );
};

export default PaymentSuccess;
