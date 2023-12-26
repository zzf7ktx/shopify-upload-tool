import { Grid, Stack } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect } from "react";
import { getImages } from "../../services/cloudinary.service";

const columns: GridColDef[] = [
  { field: "publicId", headerName: "Public Id", width: 70 },
  {
    field: "displayName",
    headerName: "Display name",
    width: 250,
    renderCell: (params) => (
      <Grid container direction="column" className="h-100">
        <Grid item columns={2} className="h-100">
          <img
            src={params.row.imageUrl}
            alt={params.row.displayName}
            height="100%"
          />
        </Grid>
        <Grid
          item
          columns={10}
          className="h-100 ms-auto d-flex align-items-center"
        >
          <span>{params.row.displayName}</span>
        </Grid>
      </Grid>
    ),
  },
  { field: "folder", headerName: "Folder", width: 130 },
  {
    field: "format",
    headerName: "Format",
    width: 90,
  },
  {
    field: "size",
    headerName: "Size",
    sortable: false,
  },
  {
    field: "fullName",
    headerName: "Source",
    sortable: false,
  },
  {
    field: "status",
    headerName: "Status",
    sortable: false,
  },
];

const rows = [
  {
    id: 1,
    displayName: "Snow",
    imageUrl:
      "https://res.cloudinary.com/dtp8svzny/image/upload/v1703392886/test_new_paint_r6fw1t.png",
    folder: "samples",
  },
  {
    id: 2,
    displayName: "Lannister",
    imageUrl:
      "https://res.cloudinary.com/dtp8svzny/image/upload/v1703392886/test_new_paint_r6fw1t.png",
    folder: "samples",
  },
  {
    id: 3,
    displayName: "Lannister",
    imageUrl:
      "https://res.cloudinary.com/dtp8svzny/image/upload/v1703392886/test_new_paint_r6fw1t.png",
    folder: "samples",
  },
  {
    id: 4,
    displayName: "Stark",
    imageUrl:
      "https://res.cloudinary.com/dtp8svzny/image/upload/v1703392886/test_new_paint_r6fw1t.png",
    folder: "samples",
  },
  {
    id: 5,
    displayName: "Targaryen",
    imageUrl:
      "https://res.cloudinary.com/dtp8svzny/image/upload/v1703392886/test_new_paint_r6fw1t.png",
    folder: "samples",
  },
  {
    id: 6,
    displayName: "Melisandre",
    imageUrl:
      "https://res.cloudinary.com/dtp8svzny/image/upload/v1703392886/test_new_paint_r6fw1t.png",
    folder: "samples",
  },
  {
    id: 7,
    displayName: "Clifford",
    imageUrl:
      "https://res.cloudinary.com/dtp8svzny/image/upload/v1703392886/test_new_paint_r6fw1t.png",
    folder: "samples",
  },
  {
    id: 8,
    displayName: "Frances",
    imageUrl:
      "https://res.cloudinary.com/dtp8svzny/image/upload/v1703392886/test_new_paint_r6fw1t.png",
    folder: "samples",
  },
  {
    id: 9,
    displayName: "Roxie",
    imageUrl: "https://picsum.photos/200/300",
    folder: "samples",
  },
];

const ImagesPage = () => {
  useEffect(() => {
    getImages().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div style={{ height: 400, width: "100%" }} className="mt-3">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default ImagesPage;
