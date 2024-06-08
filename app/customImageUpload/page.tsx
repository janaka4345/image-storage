import ImageUploadForm from "@/components/custom/ImageUploadForm"
import ImageUploadFormSimpleBlob from "@/components/custom/ImageUploadFormSimpleBlob"
import ImageUploadFormSimple from "@/components/custom/ImageUploadFormSimple"
import ImageUploadFormSimpleCloudinary from "@/components/custom/ImageUploadFormSimpleCloudinary"


const page = () => {
    return (
        <div>
            {/* <ImageUploadForm /> */}
            {/* <ImageUploadFormSimple /> */}
            {/* <ImageUploadFormSimpleBlob /> */}
            <ImageUploadFormSimpleCloudinary />
        </div>
    )
}
export default page