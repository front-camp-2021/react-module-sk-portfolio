import {changeSliderRange} from "../../features/sliders/actions";
import {useCallback, useEffect, useRef, useState} from "react";
import './DuobleSlider.css'
import {useDispatch} from "react-redux";

export function DoubleSlider({type ,min , max, fraction, step }) {
    const dispatch = useDispatch()

    const [minValue, setMin] = useState(min)
    const [maxValue, setMax] = useState(max)

    const minValueRef = useRef(min)
    const maxValueRef = useRef(max)
    const rangeRef = useRef(null)
    const getPercentValue = useCallback((value) => value * 100 / max   , [min, max])

    const onSliderChanged = () => {
        dispatch(changeSliderRange({min: minValue, max: maxValue}))
    }

    useEffect(() => {
        const positionStart = getPercentValue(minValue)
        const positionEnd = getPercentValue(maxValue)
        console.log(positionStart);
        console.log(positionEnd)
        rangeRef.current.style.left = `${positionStart}%`
        rangeRef.current.style.width = `${positionEnd - positionStart}%`
    })
    return (
        <>
            <span>{type}</span>
            <div className="slider">
                <span>{minValue.toFixed(fraction)}</span>
                <div className="slider__wrapper">
                    <div className="slider__inner">
                        <input
                            type="range"
                            step={step}
                            min={min}
                            max={max}
                            value={minValueRef.current}
                            onChange={e => {
                                const value = Math.min(Number(e.target.value), maxValue - 1)
                                setMin(value)
                                minValueRef.current = minValue
                                onSliderChanged()
                            }}
                            className="thumb thumb--left"
                        />
                        <input
                            type="range"
                            step={step}
                            min={min}
                            max={max}
                            value={maxValueRef.current}
                            onChange={e => {
                                const value = Math.max(Number(e.target.value), minValue + 1)
                                setMax(value)
                                maxValueRef.current = maxValue
                                onSliderChanged()
                            }}


                            className="thumb thumb--right"
                        />
                        <div className="slider__track"/>
                        <div ref={rangeRef} className="slider__range"/>
                    </div>
                </div>
                <span>{maxValue.toFixed(fraction)}</span>
            </div>
        </>
    )
}