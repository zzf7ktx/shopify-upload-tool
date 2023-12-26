import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";

import {
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from "@tanstack/react-router";
import { ImagesPage } from "./images";
import Upload from "./images/components/Upload.tsx";
import BulkUpload from "./images/components/BulkUpload.tsx";

const rootRoute = new RootRoute({
  component: App,
});

const indexRoute = new Route({ getParentRoute: () => rootRoute, path: "/" });
const imageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "images",
  component: ImagesPage,
});
const uploadImageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "images/upload",
  component: Upload,
});
const bulkUploadRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "images/bulk-upload",
  component: BulkUpload,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  imageRoute,
  uploadImageRoute,
  bulkUploadRoute,
]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
