'use client'
import { useEffect } from "react"

export default function LogWelcome() {
    useEffect(()=> {
        console.log('Have a nice day, Diddy!📣🐢')
    }, [])
    return null
}