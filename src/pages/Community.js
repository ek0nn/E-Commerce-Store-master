import React, { useEffect, useState } from 'react'


   

function Community() {
  const  [allImg, setAllImg] = useState([]);
  
  function submitB() {

    fetch ("http://localhost:4000/getCom", {
       method: "GET",
    
    }).then((res) => res.json()).then((data) => {console.log(data)
        setAllImg(data.data)})
   }

   useEffect(() => {
    submitB()
   }, [])
   

  return (
    <div className='container-xxl'>Community
    {allImg.map(data => {
        return(
          <div> 
            <img width={100} height={100} src={data.image} />
       



            </div>
        )
    })}
    </div>
  )
}

export default Community