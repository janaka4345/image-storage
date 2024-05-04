'use client'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setData(json))

        return () => {

        }
    }, [])

    return (
        <div>
            <h1>page</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

