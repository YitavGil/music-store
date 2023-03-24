import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            ECOMMER
          </Typography>
          <div style={{ fontFamily: 'roboto' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
        </Box>

        <Box fontFamily={{ fontFamily: 'roboto' }} >
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="20px">Careers</Typography>
          <Typography mb="20px">Our Stores</Typography>
          <Typography mb="20px">Terms & Conditions</Typography>
          <Typography mb="20px">Privacy Policy</Typography>
        </Box>

        <Box fontFamily={{ fontFamily: 'roboto' }}>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="20px">Help Center</Typography>
          <Typography mb="20px">Track Your Order</Typography>
          <Typography mb="20px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="20px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)" fontFamily={{ fontFamily: 'roboto' }}>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="20px">
            50 north Whatever Blvd, Washington, DC 10501
          </Typography>
          <Typography mb="20px" sx={{ wordWrap: "break-word" }}>
            Email: mredwardroh@gmail.com
          </Typography>
          <Typography mb="20px">(222)333-4444</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;