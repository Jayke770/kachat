export default function Block2DataUrl(blob) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.onload = (e) => resolve(e.target.result)
        fileReader.onerror = (e) => reject('file error')
        fileReader.readAsDataURL(blob)
    })
}