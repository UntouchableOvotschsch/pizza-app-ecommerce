import React, { useState } from "react";


const Categories = ({ titles }) => {
    const [activeIndex, setIndex] = useState(0)

    return (
        <div className="categories">
            <ul>
                {
                    titles.map((el, index) => (
                        <li
                            className={index === activeIndex ? "active" : ''}
                            onClick={() => setIndex(index)}
                            key={index}
                        >{el}</li>
                    ))
                }
            </ul>
        </div>
    )
}


export default Categories