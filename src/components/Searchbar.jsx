import React from 'react'
import './Searchbar.css'
function Searchbar() {
  return (
    <div className='searchbar'>
        <input type="text" placeholder='🔍 Search in notes '/>
        <button type='submit'>Save</button>
    </div>
  )
}

export default Searchbar