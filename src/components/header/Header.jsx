import {  createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react'
import './header.css';
import categories from '../../data/category'

export const Header = ({ setCategory, category, word, setWord }) => {

	const darkTheme = createTheme({
		palette: {
			primary:{
				main: '#fff'
			},
			type: 'dark',
		},
	  });

	  const handleChange = (language) => {
		setCategory(language);
		setWord("")
	  }


	return (
		<div className="header">
			<span className="title"> {word ? word : 'Word Hunt'} </span>
			<div className="inputs">
				<ThemeProvider theme={darkTheme}>
					<TextField 
						className="search" 
						label="Search a Word" 
						value={word}
						onChange={(e) => setWord(e.target.value)}
					/>
					<TextField
						className="select"
						id="standard-select-currency"
						select
						label="Language"
						value={category}
						onChange={(e)=> handleChange(e.target.value)}
						
					>
						{categories.map((data) => (
							<MenuItem key={data.label} value={data.label}> {data.value} </MenuItem>
						))}
					</TextField>
				</ThemeProvider>
				
			</div>
		</div>
	)
}
 

