import { Button } from "@chakra-ui/react";
import { useState } from "react";



function UploadImage() {
  const [image, setImage] = useState();

  const handleImage = (event) => {
    setImage(event.target.files[0]);
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    console.log([...formData.entries()]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", image);
    fetch("http://localhost:8080/api/image/EN/save", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .catch((err) => console.log("error"));
  }

  return (
    <div>
      <input accept="image/*" type="file" onChange={(i) => handleImage(i)} />
      <Button onClick={handleUpload} colorScheme="red">
        Upload File
      </Button>
      
    </div>
  );
}

export default UploadImage;