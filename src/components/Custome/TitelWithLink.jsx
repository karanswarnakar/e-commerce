import React from 'react'

const TitelWithLink = ({data}) => {
    return (
        <div className='title-contener'>
            <p className="title">
                {data.title}
            </p>
            <a href={data.link}>View All</a>
        </div>
    )
}

export default TitelWithLink
