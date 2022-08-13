import { useEffect, useState } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { filterData, getFilterValues } from "../utils/filterData";









const SearchFilters = () => {
  const router = useRouter();




 /*****************************************************************************************************
   **********************************************************************************************************
   **********************************************************************************************************
   **********************************************************************************************************
   **********************************************************************************************************
   **********************************************************************************************************/
//////////////////////////////UPDATING URL STRING/////////////////////////////////////////////////////
  //ignore at start, used later
   //searchPropertiesHandler is the function executed during the onChange event
  const searchPropertiesHandler = (filterValues) => {
    //pathname is /search?
    const path = router.pathname;
    //query is the data request e.g. purpose=for-sale
    const { query } = router;
    const values = getFilterValues(filterValues);

    //values returns the entire arr stored upon execution of getFilterValues
    //values is looped over and item is each single iteration of values i.e. item is each obj
    values.forEach((item) => {
        //only execute this code if item.value exists becaus it only exists one time every time getFilterValues is executed
      if(item.value) {

        /*  the query object stores the same property as item as seen in the serverSideProps function in the search page. 
            but it has not been defined inside of the query yet.
            this code defines that property. */
        query[item.name] = item.value;

      }
    });
    
    //updates the http url string
    router.push({ pathname: path, query });
  };
  /*****************************************************************************************************
   **********************************************************************************************************
   **********************************************************************************************************
   **********************************************************************************************************
   **********************************************************************************************************
   **********************************************************************************************************/




////////////////////////DEFINING QUERY DATA AND CHANGING FILTER SECTION UI STATE//////////////////////
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">

        {/* filterData is an array of obj containing our filter data
            filter is the map variable for each obj contained within the filterData array */}
      {filterData.map((filter) => (

        //every map over a list of components needs a unique key i.e. the filter.queryName here because it will always be unique
        <Box key={filter.queryName}>



          {/* the placeholder prop is a chakra select component prop that stores what will be seen first in the filter i.e. 
              the placeholder value that is stored in the filter obj */}

          {/* onChange changes state when a select component option is changed */}

          {/* e is a variable that represents the Event object. the Event object stores 
              a target object which stores a property i.e. value */}

          {/* searchPropertiesHandler needs an object return as getFilterValues mandates
              inside of that obj, a key and an attribute must be returned, as mandated by any object.
              we are also setting that value dynamically as the filter obj changes:
                    filter.queryName returns a string
                    putting that string inside of brackets tells javascript that, that string is a key 
                    do not mistake that key as an array, it is instead known as a "computed property name" */}

          

          <Select
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
            onChange={(e) =>
              searchPropertiesHandler({ [filter.queryName]: e.target.value })
            }
          >
            {/* optional chaining saves time by avoiding having to use a ternery op */}
            {filter?.items?.map((items) => (
              /* items.value is another value stored in filterData and is used as the value
                                   shown and the unseen unique key of the option component */
              <option value={items.value} key={items.value}>
                {items.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
