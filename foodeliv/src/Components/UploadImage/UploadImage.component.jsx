const imageUpload = (setFormData)=>async (event) => {
    console.log("..")
    const file = event.target.files[0];
    const fileName = event.target.value;
    const ext = fileName.split(".").pop();
    setFormData(state => ({ ...state, ext }));
    const base64File = await encodeBase64(file);
    setFormData(state => ({ ...state, image: base64File }))
}

const encodeBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (() => {
            resolve(fileReader.result);
        })
        fileReader.onerror = ((err) => {
            reject(err)
        })
    })
}
export default imageUpload;
