import React, { useState } from 'react'
import { categories } from '../utils/constants'
import { Stack } from '@mui/material'
import { customColors } from '../utils/customColors';

const Sidebar = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
  return (
    <Stack
        direction='row'
        sx={{
            overflowY:'auto',
            height: {sx: 'auto', md: '95%'},
            flexDirection: { md: 'column' }
        }}
        >
        {
            categories.map( category => (
                <button
                    className='category-btn'
                    style={{
                        color: 'white',
                        backgroundColor: selectedCategory === category.name? customColors.red:''
                    }}
                    onClick={() => setSelectedCategory(category.name)}
                    >
                    <span style={{ marginRight: '10px'}}>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))
        }
    </Stack>
  )
}

export default Sidebar