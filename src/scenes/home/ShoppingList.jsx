import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Tabs, Tab, Box, Typography, useMediaQuery } from '@mui/material';
import { setItems } from "../../state";
import Item from "../../components/items/Item";
import RenderTabs from "../../components/tab-panel/RenderTabs";

const ShoppingList = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  console.log("items:", items)
  const isNonMobile = useMediaQuery("(min-width:600px)");

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
    ["All", 0],
    ["New Releases" , 0],
    ["Hard Rock", 0],
    ["Classic Rock" ,0]
  ]

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Featured <b>Products</b>
      </Typography>
      <RenderTabs tabTitles={tabTitles} tabValue={value} setTabValue={setValue} isNonMobile={isNonMobile} />
      <Box
      margin="0 auto"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, 300px)"
      justifyContent="space-around"
      rowGap="20px"
      columnGap="1.33%"
      >
      {value === 0 &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === 1 &&
          newReleases.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === 2 &&
          hardRock.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === 3 &&
          classicRock.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  )
}

export default ShoppingList