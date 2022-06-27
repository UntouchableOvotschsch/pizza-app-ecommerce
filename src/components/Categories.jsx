import React, { useState } from "react";


const CategoryItem = ({ title, activeIndex, itemIndex, setIndex }) => {
    return (
        <li
            className={itemIndex === activeIndex ? "active" : ''}
            onClick={() => setIndex(itemIndex)}
        >{title}</li>
    )
}



const Categories = ({titles}) => {
    const [activeIndex, setIndex] = useState(0)

    return (
        <div className="categories">
            <ul>
                {
                    titles.map(el => (
                        <CategoryItem
                            title={el}
                            activeIndex={activeIndex}
                            setIndex={setIndex}
                            itemIndex={titles.indexOf(el)}
                            key={titles.indexOf(el)}
                        />
                    ))
                }
            </ul>
        </div>
    )
}


export default Categories