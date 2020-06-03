import React, { useEffect, useState } from "react"

const time = () => {
    const [time, setTime] = useState(formateTime())
    useEffect(() => {
        setTimeout(() => tick(), 1000);
    })
    function tick() {
        const today = new Date()
        const localeTime = formateTime(today)
        if (localeTime != null) {
            setTime(localeTime)
        }
    }
    const timeElement = <span>{time}</span>
    return timeElement
}

function formateTime(date) {
    if (Object.prototype.toString.call(date) === "[object Date]") {
        const finnishLocale = date.toLocaleTimeString('en-FI', { hour: 'numeric', minute: 'numeric', second: 'numeric' })
        return finnishLocale
    }
    const today = new Date()
    const defaultTime = today.toLocaleTimeString('en-FI', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
    return defaultTime
}

export default time;