import React, { useState } from 'react'
import { categories } from '../utils/constants'
import { Stack } from '@mui/material'

const Sidebar = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
  return (
    <Stack
        sx={{
            overflowY:'auto',
            height: '95%'
        }}
        >
        {
            categories.map( category => (
                <button
                    className='category-btn'
                    style={{
                        color: 'white',
                        backgroundColor: selectedCategory === category.name? '#FC1503':''
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