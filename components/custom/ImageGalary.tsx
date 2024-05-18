'use client'
import { Resource } from '@/app/page';
import { CldImage } from 'next-cloudinary';

const ImageGalary = ({ resources }: { resources: Resource[] }) => {
    return (
        //   <CldImage
        //       src="cld-sample-5" // Use this sample image or upload your own via the Media Explorer
        //       width="500" // Transform the image: auto-crop to square aspect_ratio
        //       height="500"
        //       crop={{
        //           type: 'auto',
        //           source: true
        //       }}
        //       alt='img1'
        //   />

        <div className="grid grid-cols-3">
            {
                resources.map(resource => (
                    <div key={resource.public_id}>
                        <CldImage width={resource.width} height={resource.height} src={resource.url} alt="" />
                    </div>
                ))
            }
        </div>

    )
}
export default ImageGalary