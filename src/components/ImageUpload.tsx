import { useState, Fragment } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Alert, Button, Upload } from "antd";
import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { UPLOAD_IMAGE } from "../utils/graphqlFunctions/mutations";
import { useMutation } from "@apollo/client";
import { firebaseConfig, imageFolder } from "../utils/config";

const ImageUpload = ({ id, type, query }: any) => {
  const [loading, setLoading] = useState(false);
  const firebaseApp = initializeApp(firebaseConfig);
  const [uploadImage] = useMutation(UPLOAD_IMAGE, {
    refetchQueries: [{ query: query }],
  });
  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = getStorage(firebaseApp);

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  // function beforeUpload(file: any) {
  //   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  //   if (!isJpgOrPng) {
  //     return setError("You can only upload JPG/PNG file!");
  //   }
  //   const isLt2M = file.size / 1024 / 1024 < 2;
  //   if (!isLt2M) {
  //     return setError("Image must smaller than 2MB!");
  //   }
  //   return isJpgOrPng && isLt2M;
  // }

  async function handleChange(info: any) {
    if (info === null) return;
    setLoading(true);
    setError("");
    setStatus("");

    const image = info.file.originFileObj;
    const imageName = uuidv4();

    const isJpgOrPng =
      image.type === "image/jpeg" || image.type === "image/png";
    if (!isJpgOrPng) {
      return setError("You can only upload JPG/PNG file!");
    }
    const isLt2M = image.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      return setError("Image must smaller than 2MB!");
    }

    const metadata = {
      contentType: "image/jpeg",
      firebaseStorageDownloadTokens: uuidv4(),
    };

    const imagesRef = ref(storage, imageFolder);

    const membersImagesRef = ref(imagesRef, `${imageName}-${image.name}`);

    // console.log({ imagesRef });
    console.log({ membersImagesRef });

    try {
      await uploadBytes(membersImagesRef, image, metadata).then(
        (snapshot) => {}
      );
      //  Upload the file and metadata
      const uploadTask = uploadBytesResumable(membersImagesRef, image);
      await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        if (!downloadURL) {
          return setStatus("Upload failed");
        }
        uploadImage({
          variables: {
            uploadImageId: id,
            uploadImageInput: {
              imageURL: downloadURL,
              type: type,
            },
          },
        });
        setLoading(false);
        setStatus("Image uploaded.\nKindly refresh the page.");
      });
    } catch (error) {
      setError("Upload failed");
    }
  }

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <Upload
          name="avatar"
          maxCount={1}
          // listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          // beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          <Button loading={loading} icon={<UploadOutlined />}>
            Add Image
          </Button>
        </Upload>
      </div>
      {status ? <Alert message={status} type="success" showIcon /> : null}
      {error ? <Alert message={error} type="error" /> : null}
      {/* <button onClick={onSubmit}>Submit</button> */}
    </Fragment>
  );
};

export default ImageUpload;
