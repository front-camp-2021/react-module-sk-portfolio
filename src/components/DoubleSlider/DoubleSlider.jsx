import {useCallback, useEffect, useRef, useState} from "react";
import './DuobleSloder.css'

export function DoubleSlider({min = 0, max = 500}) {
    const [minValue, setMin] = useState(min)
    const [maxValue, setMax] = useState(max)

    const minValueRef = useRef(min)
    const maxValueRef = useRef(max)
    const rangeRef = useRef(null)
    const getPercentValue = useCallback( (value) => Math.round(value * 100 / max), [min, max])
    useEffect(() => {
        const positionStart = getPercentValue(minValue)
        const positionEnd = getPercentValue(maxValue)
        rangeRef.current.style.left = `${positionStart}%`
        rangeRef.current.style.width = `${positionEnd - positionStart}%`
    })
    return (
        <>
            <div className="slider">
                <span>{minValue}</span>
                <div className="slider-wr">
                    <input
                    type="range"
                    min={min}
                    max={max}
                    value={minValueRef.current}
                    onChange={e => {
                        const value = Math.min(Number(e.target.value), maxValue - 1)
                        setMin(value)
                        minValueRef.current = minValue
                    }}
                    className="thumb thumb--left"
                />
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={maxValueRef.current}
                        onChange={e => {
                            const value = Math.max(Number(e.target.value), minValue + 1)
                            setMax(value)
                            maxValueRef.current = maxValue
                        }}
                        className="thumb thumb--right"
                    />
                    <div className="slider__track"/>
                    <div ref={rangeRef} className="slider__range"/>
                </div>
                <span>{maxValue}</span>
            </div>
        </>
    );
}