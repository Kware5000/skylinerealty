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





  const searchPropertiesHandler = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if(item.value) {

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

       
      {filterData.map((filter) => (

        <Box key={filter.queryName}>




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
