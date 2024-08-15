import { Stack, Box, Typography } from "@mui/material"
import { customColors } from "../utils/customColors"
import { Sidebar, Videos } from "./index"


const Feed = () => (
  <Stack
    sx={{ 
      flexDirection: { sx: 'column', md: 'row'} 
    }}
    >
      <Box
        sx={{
          height: '92vh',
          borderRight: `1px solid ${customColors.lightGray}`,
          pr: 2,
        }}
        >
          <Sidebar />
          <Typography sx={{
            color: '#fff',
            // position: 'sticky',
            // bottom: 0
            }}
            >Copyright 2024 Dipesh Shrestha</Typography>
      </Box>
      <Box sx={{ p: 2, }}>
        <Typography variant="h4" sx={{ color: customColors.white}}>
          New <span style={{ color: customColors.red }}>Videos</span>
        </Typography>
        <Videos />
      </Box>

  </Stack>
)

export default Feed