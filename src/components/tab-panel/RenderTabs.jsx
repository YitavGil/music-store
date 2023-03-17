import { Tabs, Tab, Box, Chip, Typography, Stack } from '@mui/material';

const RenderTabs = ({ tabTitles, setTabValue, tabValue = 0, loading, isNonMobile }) => {
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleTabsChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const TabTitle = ({ title }) => {
    return (
      <Stack flexDirection="row" alignItems="center" gap={1}>
        <Typography>{title[0]}</Typography>
        {title[1] > 0 ? <Chip label={title[1]} sx={{width: '42px', height: '18px', background: '#DD524C'}} /> : ""}
      </Stack>
    )
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: '2rem' }}>
      <Tabs textColor="primary"
        indicatorColor="primary"
        value={tabValue}
        onChange={handleTabsChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}>
        {tabTitles.map((title, index) => (
          <Tab disabled={loading} key={title[0]} label={<TabTitle title={title} />} {...a11yProps(index)} />
        ))}
      </Tabs>
    </Box>
  );
};

export default RenderTabs;