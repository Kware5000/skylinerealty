import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button, useMediaQuery } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import { BsSearch } from "react-icons/bs";
import Property from "../components/Property";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { Icon } from "@chakra-ui/react";

export default function Home({ luxProperties, affProperties, newProperties }) {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const fetchSuggested = async (searchValue) => {
    return await fetchApi(
      `${baseUrl}/locations/auto-complete?input=${searchValue}`
    )
      .then((result) => {
        console.log(result.autocomplete);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const data = fetchSuggested(searchValue);

  return (
    <Box overflowX="hidden" min-width="1150px">
      <Box
        height="420px"
        width="100vw"
        display="flex"
        justify="center"
        align="center"
        position="relative"
      >
        <Box
          as="video"
          objectFit="cover"
          src={"/houses.mp4"}
          autoPlay
          muted
          loop
          height="100%"
          width="100%"
        />
        <Box position="absolute" height="100%" width="100%">
          {/* SEARCH BAR */}
          <Box
            
          >
            <Box
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              bottom="143.5px"
              right="386px"
              as="input"
              type="text"
              position="absolute"
              height="60px"
              width="45%"
              borderRadius="300px"
              paddingLeft="70px"
              paddingRight="70px"
              marginTop="230px"
              outline="none"
              fontSize="25px"
              sx={{
                "@media(min-width: 1500px)": {
                  marginRight: "200px"
                },
                "@media(min-width: 1900px)": {
                  marginRight: "300px"
                },
              }}
              placeholder="
Name of cities, districts, etc..."
            />

            <Button
              as="a"
              href={`/search?city=${searchValue}&state=tn&limit=27&offset=0`}
              position="absolute"
              width="45px"
              height="45px"
              bottom="150.5px"
              right="395px"
              zIndex="1"
              color="white"
              bgColor="red.400"
              fontSize="20px"
              borderRadius={100}
              sx={{
                "@media(min-width: 1500px)": {
                  marginRight: "200px"
                },
                "@media(min-width: 1900px)": {
                  marginRight: "300px"
                },
                
              }}
              outline="none"
            >
              <Icon as={BsSearch} />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box marginTop="50px">
        <Text fontSize="x-large" fontWeight="bold" marginLeft="30px">
          Luxury Homes in Memphis
        </Text>
        <Text
          fontSize="sm"
          marginLeft="30px"
          marginBottom="10px"
          color="red.400"
        >
          View All Luxury Homes
        </Text>
        <Flex flexWrap="wrap" marginLeft="10px">
          {luxProperties.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
      </Box>

      <Box marginTop="50px">
        <Text fontSize="x-large" fontWeight="bold" marginLeft="30px">
          Affordable Homes in Memphis
        </Text>
        <Text
          fontSize="sm"
          marginLeft="30px"
          marginBottom="10px"
          color="red.400"
        >
          View All Affordable Homes
        </Text>
        <Flex flexWrap="wrap" marginLeft="10px">
          {affProperties.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
      </Box>

      <Box marginTop="50px">
        <Text fontSize="x-large" fontWeight="bold" marginLeft="30px">
          New Constructions in Memphis
        </Text>
        <Text
          fontSize="sm"
          marginLeft="30px"
          marginBottom="10px"
          color="red.400"
        >
          View All New Construction Homes
        </Text>
        <Flex flexWrap="wrap" marginLeft="10px">
          {newProperties.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export async function getServerSideProps() {
  const luxProperties = await fetchApi(
    `${baseUrl}/properties/list-for-sale?state_code=TN&city=Memphis&prop_type=single_family,condo&offset=0&limit=6&price_min=300000&price_max=2000000&beds_min=1&sort=price_high&is_new_construction=`
  );
  const affProperties = await fetchApi(
    `${baseUrl}/properties/list-for-sale?state_code=TN&city=Memphis&prop_type=single_family,condo&offset=0&limit=6&price_min=0&price_max=375000&beds_min=1&sort=price_high&is_new_construction=`
  );
  const newProperties = await fetchApi(
    `${baseUrl}/properties/list-for-sale?state_code=TN&city=Memphis&prop_type=single_family,condo&offset=0&limit=6&price_min=0&price_max=685000&beds_min=1&sort=price_high&is_new_construction=true`
  );

  return {
    props: {
      luxProperties: luxProperties.listings,
      affProperties: affProperties.listings,
      newProperties: newProperties.listings,
    },
  };
}
