import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismaClient";
export async function POST(req:NextRequest) {
    const data=await req.formData()
    const file:File=data.get('file') as File
 

  if(!file){
  return NextResponse.json({error:'no file uploaded'})
  }

  const bytes=await file.arrayBuffer()
  const buffer=Buffer.from(bytes)
  console.log({file,buffer});

  await prisma.image.create({
    data:{
        imageBlob:buffer,
        alt:'first image'
    }
  })

 return NextResponse.json({message:'hi'})
}

export async function GET(){
    return NextResponse.json({message:'hi'})
}