import React from 'react'
// import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Upcoming.scss'
import UpcomingSlider from '../UpcomingSlider/UpcomingSlider';
// import Upcoming from '../Upcoming/Upcoming';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box className='boxy' sx={{ width: '100%' }}>
      <Box className='boxy_top' sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <div className="tab_top_text">
          <div>
            <h5>ONLINE STREAMING</h5>
            <h1>Upcoming Movies</h1>
          </div>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab className='tab-head tab_one' label="TV Shows" {...a11yProps(0)}/>
            <Tab className='tab-head' label="Documentary" {...a11yProps(1)} />
            <Tab className='tab-head' label="Movies" {...a11yProps(2)} />
            <Tab className='tab-head' label="Sports" {...a11yProps(3)} />
          </Tabs>
        </div>
      </Box>
      <TabPanel value={value} index={0}>
      <UpcomingSlider/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <UpcomingSlider/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <UpcomingSlider/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <UpcomingSlider/>
      </TabPanel>
    </Box>
  );
}

// export default TabPanel