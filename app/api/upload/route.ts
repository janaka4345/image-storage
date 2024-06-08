import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
export async function POST(req:NextRequest) {
const data=await req.formData()
const file:File=data.get('file') as File
  
  
  if(!file){
  return NextResponse.json({error:'no file uploaded'})

  }

  const bytes=await file.arrayBuffer()
  const buffer=Buffer.from(bytes)
  // console.log(buffer);

  const path=join('/','temp',file.name)
  await writeFile(path,buffer)
  console.log(path);
  

  return NextResponse.json({message:'message'},{status:200})
}


export async function GET(req:NextRequest,res:NextResponse) {
  
  return NextResponse.json({message:'message'})
}
