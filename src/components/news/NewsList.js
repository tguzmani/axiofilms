import React from 'react'

import NewItem from './NewItem'

const NewsList = () => {
  return (
    <div>
      {[1, 2, 3, 4].map(number => (
        <NewItem />
      ))}
    </div>
  )
}

export default NewsList
