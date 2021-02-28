import React from 'react'
import NewsList from '../news/NewsList'

const News = () => {
  return (
    <div className='container'>
      <div className='pt-nav'>
        <h1>Noticias</h1>

        <NewsList />
      </div>
    </div>
  )
}

export default News
