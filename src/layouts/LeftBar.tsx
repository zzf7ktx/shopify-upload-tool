import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import DocumentScannerRoundedIcon from "@mui/icons-material/DocumentScannerRounded";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";

let pages = ["Crawl", "Images", "Products"];
let icons = [
  <DocumentScannerRoundedIcon />,
  <ImageRoundedIcon />,
  <Inventory2RoundedIcon />,
];

const LeftBar = () => {
  return (
    <Box role="presentation" className="shadow h-100">
      <List>
        <ListItem>
          <ListItemText>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              className="d-flex gap-2 align-items-center"
            >
              <CategoryRoundedIcon fontSize="medium" />
              SFTOOL
            </Typography>
          </ListItemText>
        </ListItem>
        {pages.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
};

export default LeftBar;
