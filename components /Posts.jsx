import React, { useEffect, useState } from 'react'
import { getPost } from '../src/api/PostApi'

const Posts = () => {

        const [data , setData ] = useState([])


      const getPostData = async ()=>{
    
        const res = await getPost()
        console.log(res.data)
        console.log("june 10th")
        setData(res.data)
    
      }
      // this is a sample comment

  useEffect(()=>{
    getPostData()
  },[])

  return (
    <div>
      <ul>
        {
            data.map( (currElem , index)=>{
                const {body , id , title } = currElem
                return(
                    <li key={id }>
                        <h4>{title}</h4>
                        <p>{body}</p>
                        <button>Edit</button>
                        <button onClick={()=> handleDeletePost(id)}>Delete </button>

                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Posts
