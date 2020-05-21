import React, { useEffect, useState } from "react"

function Time() {
    const [time, setTime] = useState(formateTime())
    useEffect(() => {
        setInterval(() => tick(), 1000);
    })
    function tick() {
        const today = new Date()
        const localeTime = formateTime(today)
        if (localeTime != null) {
            setTime(localeTime)
        }
    }
    return time
}

function formateTime(date) {
    if (Object.prototype.toString.call(date) === "[object Date]") {
        const finnishLocale = date.toLocaleTimeString('en-FI', { hour: 'numeric', minute: 'numeric', hour12: true })
        return finnishLocale
    }
    const today = new Date()
    const defaultTime = today.toLocaleTimeString('en-FI', { hour: 'numeric', minute: 'numeric', hour12: true })
    return defaultTime
}
export default Time;