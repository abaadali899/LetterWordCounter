 import  { useState } from "react"; 
  

function WordCount() { 
	const [text, setText] = 
		useState(""); 
	const wordCount = text 
		.split(/\s+/) 
		.filter(Boolean).length; 
	const letterCount = text.length; 

	const handleTextChange = (e) => { 
		setText(e.target.value); 
	}; 

	return ( 
		<div> 
			<input 
				placeholder= "Type your text "
				onChange={ 
					handleTextChange 
				} 
				value={text} 
			/> 
			<p> 
				Word Count: 
				{wordCount} 
			</p> 
			<p> 
				Letter Count:
				{letterCount} 
			</p> 
		</div> 
	); 
} 

export default WordCount;

 
