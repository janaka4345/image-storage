'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { FormEvent, useState } from "react"

export default function ImageUploadFormSimpleBlob() {
    const [file, setFile] = useState<Blob>()
    const [url, setUrl] = useState<string | null>(null)
    console.log('hi');

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(file)



        if (!file) return null
        console.log('file', file)

        const newUrl = URL.createObjectURL(file)
        setUrl(newUrl)
        console.log({ newUrl, url });


        // try {
        //     const data = new FormData()
        //     data.set('file', file)
        //     const res = await fetch('/api/upload', {
        //         method: 'POST',
        //         body: data
        //     })
        //     console.log(res);

        // } catch (error) {
        //     console.log(error);

        // }
    }
    return (
        <>
            {url && <Image src={url} alt='image' width={100} height={100} />}
            <form onSubmit={handleSubmit}>
                <Input type="file" name='file' onChange={(e) => { setFile(e.target.files?.[0]) }}></Input>
                <Button type="submit">upload image</Button>
            </form>
        </>
    )
}
