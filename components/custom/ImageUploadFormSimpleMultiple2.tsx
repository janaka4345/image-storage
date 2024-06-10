'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { ChangeEvent, FormEvent, useState } from "react"

export default function ImageUploadFormSimpleMultiple2() {
    const [file, setFile] = useState<FileList>()
    const [url, setUrl] = useState<string | null>(null)

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        console.log({ log: e.target.files });
        console.log({ file });


        e.target.files && setFile(e.target.files)
        // if (e.target.files?.[0]) {
        //     const newUrl = URL.createObjectURL(e.target.files?.[0])
        //     setUrl(newUrl)
        // }

    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log({ file });


        // console.log(file)

        // if (!file) return null

        //     const newUrl = URL.createObjectURL(file)
        //     setUrl(newUrl)
        //     console.log({ newUrl, url });


        // try {
        //     const data = new FormData()
        //     data.set('file', file)
        //     const res = await fetch('/api/cloudinaryUpload', {
        //         method: 'POST',
        //         body: data
        //     })
        //     // console.log(res);

        // } catch (error) {
        //     console.log(error);

        // }
    }
    return (
        <>
            {/* {url && <Image className="w-[100px] h-[100px] object-cover" src={url} alt='image' width={100} height={100} />} */}
            <form onSubmit={handleSubmit}>
                {/* <Input type="file" multiple name='file' onChange={(e) => handleChange(e)}></Input> */}
                <Input type="file" multiple name='file' onChange={(e) => handleChange(e)} />
                <Button type="submit">upload image</Button>
            </form>
            {JSON.stringify(file, null, 2)}
        </>
    )
}
