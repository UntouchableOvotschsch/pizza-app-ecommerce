import React from "react";


const Categories = ({ titles, catergoryID, setCategoryID}) => {

    return (
        <div className="categories">
            <ul>
                {
                    titles.map((el, index) => (
                        <li
                            className={index === catergoryID ? "active" : ''}
                            onClick={() => setCategoryID(index)}
                            key={index}
                        >{el}</li>
                    ))
                }
            </ul>
        </div>
    )
}


export default Categories