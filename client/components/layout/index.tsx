import { Fragment } from "react";
import Header from "../header";
import PageContainer from "./page-container";

export interface LayoutProps {
  fullWidth?: boolean | undefined;
  grid?: boolean | undefined;
  children?: React.ReactNode;
}

const Layout = ({ fullWidth, grid, children }: LayoutProps) => {
  return (
    <Fragment>
      <Header />
      <PageContainer fullWidth={fullWidth} grid={grid} children={children} />
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Layout;
