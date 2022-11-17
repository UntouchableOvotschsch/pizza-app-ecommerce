import React, {useEffect, useRef} from "react";
import {useDispatch} from "react-redux"

import {setAscDesc, setSortPopUpIndex, setSortPopUpMode} from "../redux/slices/pageParamsSlice"


type SortPopUpProps = {
    titles: string[],
    sortPopUpMode: boolean,
    sortPopUpIndex: number,
    ascDesc: string,
}


const SortPopUp: React.FC<SortPopUpProps> = (props) => {
    const {titles, sortPopUpMode, sortPopUpIndex, ascDesc} = props

    const dispatch = useDispatch()
    const sortRef = useRef<HTMLDivElement>(null)

    const onClickSetter = (mode: boolean, index: number) => {
        dispatch(setSortPopUpIndex(index))
        dispatch(setSortPopUpMode(!mode))
    }


    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
                dispatch(setSortPopUpMode(false))
            }
        }
        document.body.addEventListener("click", handleClickOutside)

        return () => {
            document.body.removeEventListener("click", handleClickOutside)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <svg
                    className={ascDesc === "desc" ? "active" : ""}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => dispatch(setAscDesc(ascDesc === "asc" ? "desc" : "asc"))}
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span
                    onClick={() => dispatch(setSortPopUpMode(!sortPopUpMode))}
                >{titles[sortPopUpIndex]}</span>
            </div>

            {
                sortPopUpMode &&
              <div className="sort__popup">
                <ul>
                    {
                        titles.map((el, index) => (
                            <li
                                className={sortPopUpIndex === index ? "active" : ""}
                                onClick={() => onClickSetter(sortPopUpMode, index)}
                                key={index}
                            >{el}
                            </li>
                        ))
                    }
                </ul>
              </div>
            }


        </div>

    )
}


export default SortPopUp