import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, Stack } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const icons = [
    <SearchOutlined />,
    <PersonOutline />,
    <ShoppingBagOutlined />,
    <MenuOutlined />,
  ];

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
          color={shades.secondary[500]}
        >
          RockMi
        </Box>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          columnGap={"20px"}
          zIndex="2"
        >
          {icons.map((icon) => {
            return(
              <IconButton sx={{ color: 'black'}}>
                {icon}
              </IconButton>
            )
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
