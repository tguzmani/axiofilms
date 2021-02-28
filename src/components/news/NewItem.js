import React from 'react'

const NewItem = () => {
  const searchTerms = ['filming']
  const searchTerm =
    searchTerms[[Math.floor(Math.random() * searchTerms.length)]]

  return (
    <div className='new'>
      <h2 className='mb-2 '>Lorem ipsum dolor sit</h2>
      <div className='new-picture'>
        <img src={`https://source.unsplash.com/daily?${searchTerm}`} />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque
        incidunt modi! Suscipit placeat necessitatibus veritatis facere iusto,
        reprehenderit nesciunt eaque consectetur. Vero, aperiam. Alias.
      </p>
      <p className='new-date'>27 de febrero de 2020 - 14:37 pm</p>
    </div>
  )
}

export default NewItem
