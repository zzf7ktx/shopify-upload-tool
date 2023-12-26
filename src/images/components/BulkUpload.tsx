import { ChangeEvent, FormEvent, useState } from "react";
import { bulkUpload } from "../../services/cloudinary.service";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import { Button, ButtonGroup, styled } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const BulkUpload = () => {
  // Use state to store the uploaded files
  const [files, setFiles] = useState<FileList | null>(null);

  // Handle the file input change event
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  // Handle the form submit event
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!files) {
      return;
    }

    try {
      const result = await bulkUpload(files);
      console.log(result);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit}>
        <ButtonGroup>
          <Button
            component="label"
            variant="outlined"
            className="text-capitalize"
          >
            {!files ? "Choose files" : `${files.length} files chosen`}
            <VisuallyHiddenInput type="file" multiple onChange={handleChange} />
          </Button>
          <Button
            variant="contained"
            startIcon={<CloudUploadRoundedIcon />}
            type="submit"
          >
            Submit
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
};

export default BulkUpload;
