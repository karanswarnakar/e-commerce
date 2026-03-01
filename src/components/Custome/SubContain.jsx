import React from 'react'

const SubContain = ({data}) => {
    return (
        <div className='sub-contain'>
            <div>  <h1>Your Ultimate Market</h1>
                <div className='cont con-text'>Top-Notch Quality</div>


                <h1>Everything You Need</h1>
            </div>
            <div>  <h1>Super Fresh</h1>
                <div className='cont con-img'
                style={{
                    backgroundImage:`url("../public/image/${data.img1}")`
                }}
                ></div>


                <h1>And Bursting With Flavor</h1>
                <div className='cont con-img'
                style={{
                    backgroundImage:`url("../public/image/${data.img2}")`
                }}
                ></div>
            </div>

        </div>
    )
}

export default SubContain
