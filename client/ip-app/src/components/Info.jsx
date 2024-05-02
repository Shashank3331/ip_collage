import React from 'react'
import img from './banner.png'

function Info() {
  return (
    <div>
        <div className="container m-5">
            <div className="row">
                <div className="col-md-6 bg-primary">
                     <div className="content text-white p-5">
                     <h2>Lorem ipsum dolor sit amet.</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint incidunt similique dolores delectus, aspernatur repudiandae quia. Quaerat, pariatur delectus?</p>
                     </div>
                </div>
                <div className="col-md-6">
              <img src={img} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info
