import ImageUploadForm from "@/components/custom/ImageUploadForm"
import ImageUploadFormSimpleBlob from "@/components/custom/ImageUploadFormSimpleBlob"
import ImageUploadFormSimple from "@/components/custom/ImageUploadFormSimple"
import ImageUploadFormSimpleCloudinary from "@/components/custom/ImageUploadFormSimpleCloudinary"
import ImageUploadFormMultiple from "@/components/custom/ImageUploadFormMultiple"
import ImageUploadFormSimpleMultiple2 from "@/components/custom/ImageUploadFormSimpleMultiple2"


const page = () => {
    return (
        <div>
            {/* <ImageUploadForm /> */}
            {/* <ImageUploadFormSimple /> */}
            {/* <ImageUploadFormSimpleBlob /> */}
            {/* <ImageUploadFormSimpleCloudinary /> */}
            <ImageUploadFormMultiple />
            {/* <ImageUploadFormSimpleMultiple2 /> */}
        </div>
    )
}
export default page