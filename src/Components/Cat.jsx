import React, { useState, useEffect } from 'react'

export default function Cat(props) {

  let { catPic, num, index, cats } = props
  const [cat, setCat] = useState(null)

  useEffect(() => {
    if (!cats.length) {
      const localCats = localStorage.getItem('cats')
      setCat(localCats)
    } else {
      setCat(cats[index])
    }
  }, [cats, index])


  return (
    <div className="contanier">
      <h1>{`Welcome to Cat Fact number ${num}`}</h1>
      <h3>{cat && cat.text}</h3>
      <img className='img' src={catPic} alt="cat having fun" />
    </div>
  )
}