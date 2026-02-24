import React from 'react'

const TitelWithLink = ({title,link}) => {
    return (
        <div className='title-contener'>
            <p className="title">
                {title}
            </p>
            <a href={link}>View All</a>
        </div>
    )
}

export default TitelWithLink
