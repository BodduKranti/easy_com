export const imageToBase64 = async (imagesFile: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(imagesFile);

    const data = await new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })

    return data
}