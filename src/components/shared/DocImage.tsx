import React from 'react'

const DocImage = ({
    url,
    title
}: {
    url: string,
    title?: string
}) => {
    return (
        <div>
            <div className=" bg-gradient-to-tr from-gray-800 to-gray-900 p-5 md:p-10 flex items-center shadow-xl shadow-black/30">
                <div className='aspect-[1/1.414] w-full bg-center  bg-no-repeat bg-contain' style={{ backgroundImage: `url(${url})` }}></div>
            </div>
            <div className="p-3 text-lg md:text-xl font-medium capitalize">
                <p>{title}</p>
            </div>
        </div>
    )
}

export default DocImage