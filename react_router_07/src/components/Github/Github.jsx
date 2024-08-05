import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()

    // 1st method 
    // const [data, setData] = useState([])
    // useEffect(() => {
    //    fetch('https://api.github.com/users/ankitGupta14')
    //    .then(response => response.json())
    //    .then(data => {
    //     console.log(data);
    //     setData(data)
    //    })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers} 
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github
// 2nd method for fetch for react router 
export const githubInfoLoader = async() => {
 const response =await fetch('https://api.github.com/users/ankitGupta14')
 return response.json()
}