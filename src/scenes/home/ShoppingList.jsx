import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Tabs, Tab, Box, Typography, useMediaQuery } from '@mui/material';
import { setItems } from "../../state";
import Item from "../../components/items/Item";
import RenderTabs from "../../components/tab-panel/RenderTabs";
import TabPanel from "../../components/tab-panel/TabPanel";

const ShoppingList = () => {
  const [value, setValue] = useState('all');
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  console.log("items:", items)
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems()
  },[])

  const newReleases = items.filter(
    (item) => item.attributes.category === "newRealeses"
  );
  const hardRock = items.filter(
    (item) => item.attributes.category === "hardRock"
  );
  const classicRock = items.filter(
    (item) => item.attributes.category === "classicRock"
  );

  const tabTitles = [
    ["All", 0]
    ["New Releases" , 0],
    ["Hard Rock", 0],
    ["Classic Rock" ,0]
  ]
  console.log(items);

  return (
    <Box width="80%" margin="80px auto">
      {/* <RenderTabs tabTitles={tabTitles} tabValue={value} setTabValue={setValue} /> */}
      <Typography>

      </Typography>
    </Box>
  )
}

export default ShoppingList