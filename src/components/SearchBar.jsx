import React from 'react';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { borderColor } from '../utils/customColors';

const SearchBar = () => (
    <Paper
        sx={{
        pl: 2,
        border: `1px solid ${borderColor}`,
        borderRadius: 20,
        boxShadow: 'none',
        mr: { sm: 5 }
        }}
        >
        <input 
        type="text"
        placeholder='Search...'
        value=""
        onChange={() => {}} 
        style={{
            border:'none',
            outline: 'none'
        }}/>
        {/* IconButton is a mui that is used to enable icon as a button */}
        <IconButton>
            {/* Search is a mui icon */}
            <Search />
        </IconButton>
    </Paper>
)

export default SearchBar