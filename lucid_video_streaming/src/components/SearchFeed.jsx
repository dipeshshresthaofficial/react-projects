import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';
import { Box, Typography } from '@mui/material';

const SearchFeed = () => {
  // accessing url parameters
  const { searchTerm } = useParams();
  const [searchResult, setSearchResult] = useState([])

  //fetching results related to search term using API
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then( data => setSearchResult(data.items));
  },[searchTerm])
  
  return (
    <Box sx={{ mt: 2, py: 2, color: '#fff'}}>
      <Typography sx={{ my: 4, fontSize:'1.5rem', textAlign: 'center' }}>Search results for: <span style={{ color: '#FC1503'}}>{searchTerm}</span> videos/ channels </Typography>
      <Videos videos={searchResult} />
    </Box>
  )
}

export default SearchFeed