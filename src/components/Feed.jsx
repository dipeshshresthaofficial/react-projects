import { Stack, Box, Typography } from "@mui/material"
import { customColors } from "../utils/customColors"
import Sidebar from "./Sidebar"


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

  </Stack>
)

export default Feed