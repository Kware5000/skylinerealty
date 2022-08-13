import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";


const ImageScrollbar = ({ data }) => (
  <ScrollMenu
    style={{ overflow: "hidden" }}
  >
    {data.map((item) => {
        return (
      <Box key={item.id} width={910} itemID={item.id} overflow="hidden" p={1}>
        <Image
          alt="property"
          placeholder="blur"
          blurDataURL={item.href}
          src={item.href}
          width={1000}
          height={530}
          sizes='(max-width:500px) 100px, (max-width:1024) 400px, 1000px'
        />
      </Box>
            )
        }
    )
}
  </ScrollMenu>
);

export default ImageScrollbar;
