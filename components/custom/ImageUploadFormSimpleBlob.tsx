'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { ChangeEvent, FormEvent, useState } from "react"

export default function ImageUploadFormSimpleBlob() {
    const [file, setFile] = useState<Blob>()
    const [url, setUrl] = useState<string | null>(null)

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setFile(e.target.files?.[0])
        if (e.target.files?.[0]) {
            const newUrl = URL.createObjectURL(e.target.files?.[0])
            setUrl(newUrl)
            console.log({ newUrl, url });
        }

    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        //     console.log(file)

        //     if (!file) return null
        //     console.log('file', file)

        //     const newUrl = URL.createObjectURL(file)
        //     setUrl(newUrl)
        //     console.log({ newUrl, url });


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
            {url && <Image className="w-[100px] h-[100px] object-cover" src={url} alt='image' width={100} height={100} />}
            <form onSubmit={handleSubmit}>
                <Input type="file" name='file' onChange={(e) => handleChange(e)}></Input>
                <Button type="submit">upload image</Button>
            </form>
        </>
    )
}
