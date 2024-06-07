'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormEvent, useState } from "react"

export default function ImageUploadForm() {
    const [file, setFile] = useState<File>()

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(file)

        if (!file) return null
        console.log('file', file)


        try {
            const data = new FormData()
            data.set('file', file)
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: data
            })
            console.log(res);

        } catch (error) {
            console.log(error);

        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input type="file" name='file' onChange={(e) => setFile(e.target.files?.[0])}></Input>
            <Button type="submit">upload image</Button>
        </form>
    )
}
