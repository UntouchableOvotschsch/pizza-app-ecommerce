import React, {useCallback} from "react";
import {useDispatch} from "react-redux"

import {setCategoryID} from "../redux/slices/pageParamsSlice"


type CategoriesProps = {
    titles: string[],
    categoryID: number
}

const Categories: React.FC<CategoriesProps> = React.memo((props) => {
    const {titles, categoryID} = props

    const dispatch = useDispatch()

    const setCategoryIDCallback = useCallback((index: number) => {
        dispatch(setCategoryID(index))
    }, [dispatch])

    return (
        <div className="categories">
            <ul>
                {
                    titles.map((el, index) => (
                        <li
                            className={index === categoryID ? "active" : ""}
                            key={index}
                            onClick={() => setCategoryIDCallback(index)}> {el}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
})

Categories.displayName = "Categories";

export default Categories