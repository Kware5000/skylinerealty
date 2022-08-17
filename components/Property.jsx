import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import defaultImage from '../assets/images/house.jpg'

const Property = ( {property: { property_id,  photo, sqft, short_price, beds, baths, address, prop_status, listing_id }} ) => {
    
    const upperCaseAddress = address.toUpperCase()
    return (
    <Link href={`/property?prop_status=${prop_status}&property_id=${property_id}&listing_id=${listing_id}`} passHref>

        {/*below is full property cards*/}
        <Flex flexWrap='wrap' marginRight='105px' w='340px' p='5' paddingTop='0' justifyContent='flex-start' cursor='pointer'>
            
            {/*below is image parent div*/}
            <Box>
                <Image src={photo ? photo : 'nophoto'} width={385} height={270} alt='house'layout='fixed'/>
            </Box>

            {/*below is property description parent div*/}
            <Box w='full'>
                <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                        <Box paddingRight='3' color='green.400'>
                            <GoVerified/>
                        </Box>
                        <Text fontWeight='bold' fontSize='lg'>
                            {short_price}
                        </Text>
                    </Flex>
                </Flex>
                <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='red.400'>
                        {beds}<FaBed/> | {baths} <FaBath/> | {sqft} <BsGridFill/>
                </Flex>
                <Text fontSize='md'>
                    {upperCaseAddress.length > 30 ? `${upperCaseAddress.substring(0, 30)}...` : upperCaseAddress}
                </Text>
            </Box>
        </Flex>
    </Link>
    )
}

export default Property