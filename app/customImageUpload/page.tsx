import ImageUploadForm from "@/components/custom/ImageUploadForm"
import ImageUploadFormSimpleBlob from "@/components/custom/ImageUploadFormSimpleBlob"
import ImageUploadFormSimple from "@/components/custom/ImageUploadFormSimple"


const page = () => {
    return (
        <div>
            {/* <ImageUploadForm /> */}
            {/* <ImageUploadFormSimple /> */}
            <ImageUploadFormSimpleBlob />
        </div>
    )
}
export default page