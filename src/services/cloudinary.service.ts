import apiClient from "./apiClient";
import { v2 as cloudinary } from "cloudinary";
// TODO: Move to env and use signed upload instead
let cloudName = import.meta.env.VITE_CLOUD_NAME ?? "";
let cloudPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET ?? "";
let apiKey = import.meta.env.VITE_CLOUDINARY_KEY ?? "";
let secret = import.meta.env.VITE_CLOUDINARY_SECRET ?? "";

const upload = (file: File) => {
  let formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", cloudPreset);
  return apiClient.post(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    formData
  );
};

const bulkUpload = async (files: FileList) => {
  // Loop through the files and upload them using axios
  let tasks = [];
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    tasks.push(upload(file));
  }
  return await Promise.all(tasks);
};

const getImages = () => {
  return apiClient.get(
    `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`,
    {
      headers: {
        Authorization: `Basic ${btoa(apiKey + ":" + secret)}`,
      },
    }
  );
};

export { bulkUpload, upload, getImages };
