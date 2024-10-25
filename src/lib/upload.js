import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const upload = async (file) => {
  const storage = getStorage();
  const date = new Date ()
  const storageRef = ref(storage, `images/${date+file.name}` );

  return new Promise((resolve, reject) => { // Corrected Promise syntax
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        
      }, 
      (error) => {
        console.error('Upload failed:', error); // Handle errors here
        reject('something went wrong!' +error.code); // Reject promise on error
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          resolve(downloadURL); // Resolve promise with download URL
        });
      }
    );
  });
};

export default upload;
