import React from "react";
import { useDispatch } from 'react-redux'

import { setCategoryID } from '../redux/slices/pageParamsSlice'

const Categories = ({ titles, categoryID }) => {

    const dispatch = useDispatch()

    return (
        <div className="categories">
            <ul>
                {
                    titles.map((el, index) => (
                        <li
                            className={index === categoryID ? "active" : ''}
                            onClick={() => dispatch(setCategoryID(index))}
                            key={index}
                        >{el}</li>
                    ))
                }
            </ul>
        </div>
    )
}


export default Categories