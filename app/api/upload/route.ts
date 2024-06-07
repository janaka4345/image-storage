import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
const data=await req.formData()
const file:File=data.get('file') as File
  
  
  if(!file){
  return NextResponse.json({error:'no file uploaded'})

  }

  const bytes=await file.arrayBuffer()
  const buffer=Buffer.from(bytes)
  console.log(buffer);

  return NextResponse.json({message:'message'})
}
export async function GET(req:NextRequest,res:NextResponse) {
  
  return NextResponse.json({message:'message'})
}
