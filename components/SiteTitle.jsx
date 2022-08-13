import { Box } from "@chakra-ui/react"
import Link from 'next/link'

const SiteTitle = () =>{
    return (
    <Box
      fontSize={25}
      marginLeft={30}
      color='red.300'
      fontWeight="bold"
    >
      <Link href="/" paddingLeft="2">
        Skyline Realtors
      </Link>
    </Box>
    )
}

export default SiteTitle