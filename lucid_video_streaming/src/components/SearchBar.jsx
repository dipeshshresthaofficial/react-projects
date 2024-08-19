import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { customColors } from '../utils/customColors';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    // react router feature to navigate/ route to a provided link
    const navigate = useNavigate();

    // handles search term submission
    const handleSearchFormSubmit = e =>{
        e.preventDefault();
        if(searchTerm){
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }

    return (
        <Paper
            component= "form"   //mui Paper component acts like form element
            onSubmit = {handleSearchFormSubmit}
            sx={{
            pl: 2,
            border: `1px solid ${customColors.gray}`,
            borderRadius: 20,
            boxShadow: 'none',
            mr: { sm: 5 }
            }}
            >
            <input 
            type="text"
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
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
}

export default SearchBar