import React from "react";
import {useDispatch} from "react-redux"

import {setCategoryID} from "../redux/slices/pageParamsSlice"


type CategoriesProps = {
    titles: string[],
    categoryID: number
}

const Categories: React.FC<CategoriesProps> = (props) => {
    const {titles, categoryID} = props

    const dispatch = useDispatch()

    return (
        <div className="categories">
            <ul>
                {
                    titles.map((el, index) => (
                        <li
                            className={index === categoryID ? "active" : ""}
                            key={index}
                            onClick={() => dispatch(setCategoryID(index))}> {el}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


export default Categories