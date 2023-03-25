import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, Button, Tabs, Tab } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useParams } from "react-router-dom";
import Item from "../../components/items/Item"

const ItemDetails = () => {
  const [tabValue, setTabValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [relatedItems, setRelatedItems] = useState([]);

  const dispatch = useDispatch();
  const { itemId } = useParams();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  };

  async function getItem() {
    const item = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      { method: "GET" }
    );
    const itemJson = await item.json();
    setItem(itemJson?.data)
  };

  async function getItems() {
    
  }

  return (
    <div>ItemDetails</div>
  )
}

export default ItemDetails