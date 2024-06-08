import { cloudConfig } from "@/cloudinary.config";
import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest,res:NextResponse) {
 const data=await req.formData()
const file:File=data.get('file') as File
  
  
  if(!file){
  return NextResponse.json({error:'no file uploaded'})
  }

  const arrayBuffer=await file.arrayBuffer()
  const buffer=new Uint8Array(arrayBuffer)
  // const buffer=new Uint8Array(Buffer.from(arrayBuffer))
  // console.log(buffer);

  const response=await new Promise((resolve, reject) => {
    cloudConfig
    cloudinary.uploader.upload_stream({},(error,result)=>{
      if(error) {
        reject(error)
        return
      }
      console.log({result});
      
    resolve(result)
  }).end(buffer)
  })
  console.log({response});
  
  return NextResponse.json({message:'success'},{status:200})
}