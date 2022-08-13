import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import { baseUrl, fetchApi } from '../utils/fetchApi'
import { BsSearch } from 'react-icons/bs'
import Property from '../components/Property'
import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { Icon } from '@chakra-ui/react'

let test2 = 'bo0obies'
const fun = (test) =>{
  
  return test
}

export default function Home({ luxProperties, affProperties, newProperties }) {
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()
  const { query } = router.query

  const fetchSuggested = async (searchValue) => {
    return await fetchApi(`${baseUrl}/locations/auto-complete?input=${searchValue}`).then((result) => {
      console.log(result.autocomplete);
  })
  .catch((error) => {
      console.log(error);
  });
    };
 const data = fetchSuggested(searchValue);

  return (

    
    <Box overflowX='hidden' min-width='1150px'>
      <Box height='420px' width='100vw'  display='flex' justify='center' align='center' position='relative'>
        <Box as='video' objectFit='cover' src={'/houses.mp4'}  autoPlay muted loop height='100%' width='100%'/>
        <Box position='absolute' height='100%' width='100%'>
          <Box>
            <Box value={searchValue} onChange={(e)=>{ setSearchValue(e.target.value)}} bottom='143.5px' right='386px' as='input' type='text' position='absolute' height='60px' width='45%' borderRadius='300px' paddingLeft='70px' paddingRight='70px' marginTop='230px' outline='none' fontSize='25px' placeholder='
Name of cities, districts, etc...'/>
            <Button as='a' href={`/search?city=${searchValue}&state=tx&limit=9&offset=0`}
             position='absolute' width='45px' height='45px' bottom='150.5px' right='395px' zIndex='1' color='white' bgColor='red.400' fontSize='20px' borderRadius={100} marginRight='' outline='none'><Icon as={BsSearch}/></Button>
          </Box>
        </Box>
      </Box>
      <Box marginTop='50px'>
        <Text fontSize='x-large' fontWeight='bold' marginLeft='30px'>Luxury Homes in Memphis</Text>
        <Text fontSize='sm' marginLeft='30px' marginBottom='10px' color='red.400'>View All Luxury Homes</Text>
        <Flex flexWrap='wrap' marginLeft='10px' >
          {luxProperties.map((property)=> <Property property={property} key={property.id}/>)}
        </Flex>
      </Box>

      <Box marginTop='50px'>
        <Text fontSize='x-large' fontWeight='bold' marginLeft='30px'>Affordable Homes in Memphis</Text>
        <Text fontSize='sm' marginLeft='30px' marginBottom='10px' color='red.400'>View All Affordable Homes</Text>
        <Flex flexWrap='wrap' marginLeft='10px' >
          {affProperties.map((property)=> <Property property={property} key={property.id}/>)}
        </Flex>
      </Box>

      
      <Box marginTop='50px'>
        <Text fontSize='x-large' fontWeight='bold' marginLeft='30px'>New Constructions in Memphis</Text>
        <Text fontSize='sm' marginLeft='30px' marginBottom='10px' color='red.400'>View All New Construction Homes</Text>
        <Flex flexWrap='wrap' marginLeft='10px' >
          {newProperties.map((property)=> <Property property={property} key={property.id}/>)}
        </Flex>
      </Box>
      
    </Box>

  
    
  )

}




export async function getServerSideProps() {
  const luxProperties = await fetchApi(`${baseUrl}/properties/list-for-sale?state_code=TN&city=Memphis&prop_type=single_family,condo&offset=0&limit=6&price_min=300000&price_max=2000000&beds_min=1&sort=price_high&is_new_construction=`)
  const affProperties = await fetchApi(`${baseUrl}/properties/list-for-sale?state_code=TN&city=Memphis&prop_type=single_family,condo&offset=0&limit=6&price_min=0&price_max=375000&beds_min=1&sort=price_high&is_new_construction=`)
  const newProperties = await fetchApi(`${baseUrl}/properties/list-for-sale?state_code=TN&city=Memphis&prop_type=single_family,condo&offset=0&limit=6&price_min=0&price_max=685000&beds_min=1&sort=price_high&is_new_construction=true`)


  return {
      props: {
          luxProperties: luxProperties.listings,
          affProperties: affProperties.listings,
          newProperties: newProperties.listings,
      }
  }
}



// luxury, affordable, new construct,

// import Link from 'next/link'
// import Image from 'next/image'
// import { Flex, Box, Text, Button } from '@chakra-ui/react'
// import { baseUrl, fetchApi } from '../utils/fetchApi'
// import Property from '../components/Property'

// const Banner = ({ purpose, imageURL, linkName, buttonText, title1, title2, desc1, desc2 }) => (
//   <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10" marginBottom='30'>
//     <Image src={imageURL} width={500} height={300} alt="banner"/>
//     <Box p="5">
//     <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
//     <Text fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
//     <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br/>{desc2}</Text>
//     <Button fontSize="xl">
//       <Link href={linkName}>{buttonText}</Link>
//     </Button>
//     </Box>
//   </Flex>
//   )

// export default function Home({ propertyForSale }) {
//   return (
//     <Box>
//       <Banner
//         purpose='BUY A HOME'
//         title1="Find, Buy & Own Your"
//         title2="Dream Home"
//         desc1="Explore Apartment, Villas, Homes"
//         desc2="and more"
//         buttonText="Explore Buying"
//         linkName="/search?purpose=for-sale"
//         imageURL="https://ap.rdcpix.com/27f1c052d5607375b8f7afac2b067a4dl-m3407314278s-w1024_h768.jpg"
        
//       />
//       <Flex flexWrap='wrap' >
//         {propertyForSale.map((property)=> <Property property={property} key={property.id}/>)}
//       </Flex>
      
//     </Box>
    
//   )
// }


// export async function getStaticProps() {
//   let city = 'Memphis'
//   let state = 'TN'
//   const propertyForSale = await fetchApi(`${baseUrl}/properties/list-for-sale?state_code=${state}&city=${city}&offset=0&limit=9&beds_min=1&sort=price_high&price_max=1500000`)
//   return {
//     props: {
//       propertyForSale: propertyForSale.listings,
//     }
//   }
// }





{/*

////////////////////////////////// TO ADD RENTAL PROPERTIES /////////////////////////////////////////


      <Banner
        purpose='BUY A HOME'
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartment, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageURL="https://ap.rdcpix.com/27f1c052d5607375b8f7afac2b067a4dl-m3407314278s-w1024_h768.jpg"
        
      />
      <Flex flexWrap='wrap' >
        {propertyForRent.map((data)=> <Property property={data} key={data.id}/>)}
      </Flex>
  */}
     {/*const propertyForRent = await fetchApi(`${baseUrl}/properties/list-for-rent?state_code=${state}&city=${city}&offset=0&limit=9`)*/}

     {/* propertyForRent: propertyForRent.listings,*/}
