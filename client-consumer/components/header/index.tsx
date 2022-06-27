import Image from "next/image";
import { Link } from "styles";
import {
  Container,
  HeaderBar,
  HomeButton,
  HomeButtonContainer,
  LogoContainer,
  Title,
} from "./style";

const Header = () => {
  return (
    <HeaderBar>
      <Container>
        <HomeButtonContainer>
          <Link href="/">
            <HomeButton>
              <LogoContainer>
                <Image src="/logo.png" alt="LOGO" width={60} height={60} />
              </LogoContainer>
              <Title>
                <h3>Simple Eco</h3>
                <div>Clothing store</div>
              </Title>
            </HomeButton>
          </Link>
        </HomeButtonContainer>
      </Container>
    </HeaderBar>
  );
};

export default Header;
