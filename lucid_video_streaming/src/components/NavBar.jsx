import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import { SearchBar } from './index';

const NavBar = () => (
    // Stack is a mui component used to manage set of child components
    <Stack 
      direction="row"
      alignItems="center"
      p={2}
      sx={{ backgroundColor: '#000', position:'sticky', top: 0, justifyContent: 'space-between'
       }}>
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center' }}
          >
          <img src={logo} alt="logo" height={45} />
        </Link>
        {/* Paper is a mui component with a simple div and a white background */}
        <SearchBar />
    </Stack>
  )

export default NavBar