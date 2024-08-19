import { Stack, Box, Typography } from "@mui/material"
import { customColors } from "../utils/customColors"
import { Sidebar, Videos } from "./index"
import { useEffect, useState } from "react"
import { fetchFromAPI } from "../utils/fetchFromAPI"


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  
  // fetching data from rapid api based on selected category from sidebar
  useEffect(() =>{
    fetchFromAPI(`search?q=${selectedCategory}&part=snippet`)
    .then((data) => setVideos(data.items));
  },[selectedCategory])

  // update selected category state
  function handleSelectedCategory(value){
    setSelectedCategory(value);
  }

  return (
    <Stack
      sx={{ 
        flexDirection: { sx: 'column', md: 'row'} 
      }}
      >
        {/* Sidebar container */}
        <Box
          sx={{
            height: {md: '92vh', sx: 'auto'},
            borderRight: `1px solid ${customColors.lightGray}`,
            pr: 2,
          }}
          >
            <Sidebar selectedCategory={selectedCategory} handleSelectedCategory={handleSelectedCategory} />
            <Typography sx={{
              color: '#fff',
              // position: 'sticky',
              // bottom: 0
              }}
              >Copyright 2024 Dipesh Shrestha</Typography>
        </Box>
          
        {/* Videos Feed */}
        <Box sx={{ p: 2, height: {md: '92vh', sx: 'auto'}}}>
          <Typography variant="h5" sx={{ color: customColors.white}}>
            {selectedCategory} <span style={{ color: customColors.red }}>Videos</span>
          </Typography>
          <Videos videos={videos}/>
        </Box>

    </Stack>
)}

export default Feed