/*
Data useRouter gives you

Object
asPath: "/search?purpose=for-sale"
back: ƒ ()
basePath: ""
beforePopState: ƒ ()
components: {/search: {…}, /_app: {…}}
defaultLocale: undefined
domainLocales: undefined
events: {on: ƒ, off: ƒ, emit: ƒ}
isFallback: false
isLocaleDomain: false
isPreview: false
isReady: true
locale: undefined
locales: undefined
pathname: "/search"
prefetch: ƒ ()
push: ƒ ()
query:
purpose: "for-sale"
[[Prototype]]: Object
reload: ƒ ()
replace: ƒ ()
route: "/search"
*/



import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import { Flex, Box, Text, Icon, Button } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import noresults from '../assets/images/noresults.svg'
import { fetchApi, baseUrl } from "../utils/fetchApi";

const Search = ({ properties, listings }) => {
    console.log(properties)
    
  const [searchFilters, setSearchFilters] = useState(false);


  const router = useRouter();
  console.log(router)

const [tester, setTester] = useState(27)

router.query.limit = tester


  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.400"
        p="2"
        fontWeight="black"
        fontSize="xl"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters(() => !searchFilters)}
      >
        <Text>Search Property by Filter</Text>
        <Icon
          marginTop={1}
          marginRight={1}
          paddingLeft={2}
          w={7}
          as={BsFilter}
        />
      </Flex>
        {/* toggles searchFilters component */}
      {searchFilters && <SearchFilters />}

        {/* uses next.js router to manipulate the data shown in the search page */}
      <Text fontSize="2xl" p='4' fontWeight='bold'>
        {/* Dynamically tells user what type of property is being searched */}
          {router.query.purpose === undefined? 'All ' : ''}
          Properties 
          {router.query.purpose === 'for-sale' ? ' For Sale' : ''}
          {router.query.purpose === 'for-rent' ? ' For Rent' : ''}
      </Text>
      
        {/* remember that even tho the prop of the Property component needs to have an object returned to 
        the prop named property, you still must define the prop named property */}
      <Flex flexWrap='wrap'>
        {/* mapping over a component requires you to use a key. the .id is given by react. */}
        {properties.map((data) => <Property property={data} key={data.id}/>)}
      </Flex>


      {/* returns a no results picture in the case of an invalid return */}
      {properties.length ===  0 && (
          <Flex justifyContent='center' alignItems='center' flexDirection='column' marginTop='5' marginBottom='5'>
            <Image alt='no result' src={noresults} height='300' width='600'/>  
            <Text fontSize={50} marginTop={6}>
                No Results...    
            </Text>           
          </Flex>
      )}
      <Button onClick={()=>{ 
  const path = router.pathname;
  const { query } = router;
  setTester(parseInt(tester) + 18)
  
  //updates the http url string
  router.push({ pathname: path, query }); }}>Test</Button>
        </Box>
  
        
  );
};

export default Search;


export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-sale';
    const minPrice = query.price_min || '1';
    const maxPrice = query.price_max || '1500000';
    const bedsMin = query.beds_min || '1';
    const bathsMin = query.bathsMin || '1';
    const sort = query.sort || 'price_high';
    const areaMin = query.sqft_min || ''
    const areaMax = query.sqft_max || ''
    const listings = query.limit || '9';
    const city = query.city || 'Memphis'
    const state = query.state || 'TN'
    const newConstruction = query.newConstruction || 'false'
    const properties = await fetchApi(`${baseUrl}/properties/list-${purpose}?state_code=${state}&city=${city}&offset=0&limit=${listings}&price_min=${minPrice}&price_max=${maxPrice}&baths_min${bathsMin}&beds_min=${bedsMin}&sort=${sort}&sqft_min=${areaMin}&sqft_max=${areaMax}&is_new_construction=${newConstruction}`)
    return {
        props: {
            properties: properties.listings,
        }
    }
  }
  
  
