import SweetAlert from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Swal = withReactContent(SweetAlert)
export default function Fileupload(e, type) {
    const selectedfiles = e.target.files
    if (type === 'image') {
        let validImages = []
        const imagefileTypes = [
            "image/apng",
            "image/bmp",
            "image/gif",
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/svg+xml",
            "image/tiff",
            "image/webp",
            "image/x-icon"
        ]
        for (let i = 0; i < selectedfiles.length; i++) {
            if (imagefileTypes.includes(selectedfiles[i].type)) {
                validImages.push(selectedfiles[i])
            }
        }
        console.log(validImages)
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Invalid File Type',
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            backdrop: false,
            showClass: {
                popup: 'animate__animated animate__fadeInUp ms-300'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutDown ms-400'
            }
        })
    }
}