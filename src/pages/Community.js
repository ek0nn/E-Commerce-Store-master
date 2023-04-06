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
      <div className='col-8'>
          <div className='sort-grid'>
          <div className='d-flex align-items-center '>

          <div className='row'> 
    {allImg.map(data => {
        return(
        
            <div class="col-smallstuff">

    <div className='small-banner1 position-relative'>
    <img src={data.image} className='img'
    alt={data.firstname} onError={(event) => event.target.removeAttribute('src')} 
    />
              

            
    </div>
   
            </div>


        )
    })}
     </div>
     </div>
     

</div>
</div>
    </div>
  )
}

export default Community