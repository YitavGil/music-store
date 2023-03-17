import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";
import { albums, concert, guitars } from "../../assets/carusel";

// imports all images from the assets folder
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = [albums, concert, guitars];

const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {heroTextureImports?.map((texture, index) => {
        let title = "";
        switch (index) {
          case 0:
            title = "TOP HARD ROCKIN' RECORDS!";
            break;
          case 1:
            title = "THE MOST EXCITING CONCERTS!";
            break;
          case 2:
            title = "LOUDEST GUITARS";
            break;
          default:
            title = "BEST MUSIC";
        }
        return (
          <Box key={index}>
            <img
              src={texture}
              alt={`image_${index + 1}`}
              style={{
                width: "100%",
                height: "700px",
                objectFit: "cover",
                backgroundAttachment: "fixed",
              }}
            />
            <Box
              color="white"
              padding="20px"
              borderRadius="5px"
              textAlign="left"
              backgroundColor="rgb(0, 0, 0, 0.6)"
              position="absolute"
              top="46%"
              left={isNonMobile ? "10%" : "0"}
              right={isNonMobile ? undefined : "0"}
              margin={isNonMobile ? undefined : "0 auto"}
              maxWidth={isNonMobile ? undefined : "240px"}
            >
              <Typography
                fontSize="28px"
                fontWeight="bold"
                color={shades.secondary[500]}
              >
                -- {title}
              </Typography>
              <Typography variant="h1">On Sale Now!</Typography>
              <Typography
                fontWeight="bold"
                color={shades.secondary[300]}
                sx={{ textDecoration: "underline" }}
              >
                Discover More
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Carousel>
  );
};

export default MainCarousel;
