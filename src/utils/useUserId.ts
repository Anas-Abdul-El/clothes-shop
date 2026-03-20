"use client"

import { useEffect, useState } from "react"
import { getItem, setItem } from "./localstorage"

export function useUserId(key: string) {
    const [value, setValue] = useState(() => {
        const item = getItem(key)
        return item;
    })

    useEffect(() => {
        setItem(key, value)
    }, [value])

    return [
        value,
        setValue
    ] as const;
}