import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';

import { NavBar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components/index';

const App = () => (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element = {<VideoDetail />} />
          <Route path='/channel/:id' element = {<ChannelDetail />} />
          <Route path='/search/:searchTerm' element = {<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )

export default App
