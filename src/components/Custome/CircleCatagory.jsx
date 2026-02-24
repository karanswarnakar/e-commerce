import React from 'react'

const CircleCatagory = ({ data }) => {

    function spaceCreation() {
        if(data.isSpace == true){
            return <br />
        }
    }

    function isImg() {
        if (data.isImage != true) {
            return <div className="menu-catagory-card">
                <div className="ctagory-img"
                    style={{
                        backgroundColor: `${data.color}`,
                        backgroundPosition: 'center',
                        borderImageRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}
                >
                    <p>
                        <span
                            style={{
                                color: data.textColor[0]
                            }}
                        >{data.title.split(" ")[0]}</span>
                        <span>&nbsp;{spaceCreation()}</span>
                        <span
                            style={{
                                color: data.textColor[1]
                            }}
                        >{data.title.split(" ")[1]}</span>
                    </p>

                </div>
                <p className='catagory-name'>{data.title}</p>
            </div>
        } else {
            return <div className="menu-catagory-card">
                <div className="ctagory-img"
                    style={{
                        backgroundImage: `url("../public/image/${data.image}")`,
                        backgroundPosition: 'center',
                        borderImageRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        boxShadow:"inset 0px 0px 40px 2px rgb(233 233 233 / 88%)"
                    }}
                ></div>
                <p className='catagory-name'>{data.title}</p>
            </div>
        }
    }



    return (
        <>
            {isImg()}

        </>
    )
}

export default CircleCatagory
