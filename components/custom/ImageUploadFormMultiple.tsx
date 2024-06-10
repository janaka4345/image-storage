'use client'
import { z } from "zod"
const formSchema = z.object({
    file: typeof window === 'undefined' ? z.any() : z.instanceof(FileList).refine((file) => file?.length > 1, 'File is required.').optional()
})

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export default function ImageUploadFormMultiple() {


    const form = useForm({
        resolver: zodResolver(formSchema),
        // defaultValues: {
        //     file: ''
        // },

    })
    const fileRef = form.register("file");

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // if (!values.file) return
        console.log(values)

        // try {
        // const data = new FormData()
        // data.set('file', values.file)
        // const res = await fetch('/api/upload', {
        //     method: 'POST',
        //     body: data
        // })
        // console.log(res);

        // } catch (error) {
        //     console.log(error);

        // }
    }
    return (
        <>
            <p>tryinw</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[60dvw] pl-28">
                    <FormField
                        control={form.control}
                        name="file"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>File </FormLabel>
                                <FormControl>
                                    <Input type="file" multiple placeholder="shadcn" {...fileRef} />
                                </FormControl>
                                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    )
}
