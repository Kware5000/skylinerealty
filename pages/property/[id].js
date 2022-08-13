// import { Box, Flex, Spacer, Text, Avatar } from "@chakra-ui/react"
// import { FaBed, FaBath } from "react-icons/fa";
// import { BsGridFill } from "react-icons/bs";
// import { GoVerified } from "react-icons/go";
// import millify from "millify";
// import { baseUrl, fetchApi } from '../../utils/fetchApi'

// const PropertyDetails = ({ propertyDetails: { neighborhood } }) => (
//     <Box>
//         <Text>
//             Hey {neighborhood}
//         </Text>
//         {console.log(neighborhood)}
//     </Box>
// )

// export default PropertyDetails




// export async function getServerSideProps({params: {listing_id, prop_status, property_id}}){
//     // const prop_status='for_sale'
//     // const property_id='7102463127'
//     // const listing_id='2943424323'
//     const data = await fetchApi(`${baseUrl}/properties/detail?listing_id=${listing_id}&prop_status=${prop_status}&property_id=${property_id}`)
//     return {
//         props: {
//             propertyDetails: data.listing,
//         },
//     };
// }
