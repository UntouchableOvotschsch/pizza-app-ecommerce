import React, { useState } from "react";


const CategoryItem = ({ title, index, itemIndex, setIndex }) => {
    return (
        <li
            className={itemIndex === index ? "active" : ''}
            onClick={() => setIndex(itemIndex)}
        >{title}</li>
    )
}



const Categories = ({titles}) => {
    const [index, setIndex] = useState(0)

    return (
        <div className="categories">
            <ul>
                {
                    titles.map(el => (
                        <CategoryItem
                            title={el}
                            index={index}
                            setIndex={setIndex}
                            itemIndex={titles.indexOf(el)}
                            key={index * Math.PI}
                        />
                    ))
                }
            </ul>
        </div>
    )
}


export default Categories