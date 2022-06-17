import { LayoutProps } from ".";
import { PageContainer as Container } from "./style";

const PageContainer = ({ fullWidth, grid, children }: LayoutProps) => (
  <Container fullWidth={fullWidth} grid={grid}>
    {children}
  </Container>
);

export default PageContainer;
