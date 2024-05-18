// import { cloudConfig } from "@/cloudinary.config";
import ImageGalary from "@/components/custom/ImageGalary";
import { v2 as cloudinary } from "cloudinary";

export type Resource = {
  public_id: string,
  url: string,
  secure_url: string,
  width: number,
  height: number
}
export default async function Home() {

  cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  })
  const { resources }: { resources: Resource[] } = await cloudinary.api.resources()
  console.log(resources);

  return (
    <main>
      <h1>hi</h1>
      <ImageGalary resources={resources} />

    </main>
  );
}
