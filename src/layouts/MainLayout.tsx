import classes from "./MainLayout.module.scss";
import classNames from "classnames";
import { ReactNode } from "react";
import LeftBar from "./LeftBar";

export interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={classNames(classes["main"], "row m-0")}>
      <div className="col-12 col-md-1 col-lg-2 p-0">
        <LeftBar />
      </div>
      <div className="col-12 col-md-11 col-lg-10 overflow-auto h-100">{children}</div>
    </div>
  );
};

export default MainLayout;
