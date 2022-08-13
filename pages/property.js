import { Box, Flex, Spacer, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import ImageScrollbar from "../components/ImageScrollbar";
//price, beds, baths, lot_sqft, neighborhood, office, garage, style, agent, stories,
//description, prop_status, photos, photo

const PropertyDetails = ({
  propertyDetails: {
    price,
    address,
    beds,
    baths,
    lot_sqft,
    neighborhood,
    office,
    garage,
    style,
    agent,
    short_price,
    stories,
    description,
    prop_status,
    photos,
    photo,
  },
}) => {
    const { city, line, postal_code, state, county, neighborhood_name } = address

    return (
    <Box maxWidth={1200} margin="auto" p={4}>
      {photos && <ImageScrollbar data={photos}/>}
      <Box w='full' p={6}>
         <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                        <Text fontWeight='bold' fontSize={23} letterSpacing={.3}>
                            ${millify(price)}
                        </Text>
                    </Flex>
                </Flex>
                <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='red.400'>
                        {beds}<FaBed/> | {baths} <FaBath/> | {lot_sqft} <BsGridFill/>
                </Flex>
                <Text fontSize='md'>
                    {line.toUpperCase()} IN {city.toUpperCase()} | {postal_code.toUpperCase()} | {String(neighborhood_name).toUpperCase()} {county.toUpperCase()} | {state.toUpperCase()}
                </Text>
                <Text lineHeight={2} color='gray.600'>{description}</Text>

      </Box>
    </Box>

  );
}
;

export default PropertyDetails;

export async function getServerSideProps({
  query: { listing_id, prop_status, property_id },
}) {
  const data = await fetchApi(
    `${baseUrl}/properties/detail?listing_id=${listing_id}&prop_status=${prop_status}&property_id=${property_id}`
  );
  return {
    props: {
      propertyDetails: data.listing,
    },
  };
}
