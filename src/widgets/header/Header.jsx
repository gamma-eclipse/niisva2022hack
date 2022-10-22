import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import PolicyIcon from '@mui/icons-material/Policy';
import { Container, IconButton, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled('header')`
  background-color: ${(props) => props.theme.palette.primary.main};
  padding: 5px 0;
`;
const HeaderLayout = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Navigation = styled('div')`
  display: flex;
`;
const Title = styled(Typography)``;

export function Header() {
  return (
    <HeaderWrapper>
      <Container maxWidth="lg">
        <HeaderLayout>
          <Navigation>
            <IconButton component={Link} to="/">
              <PolicyIcon style={{ color: '#fff', width: 30, height: 30 }} />
            </IconButton>
            <IconButton component={Link} to="/dynamic">
              <ConnectingAirportsIcon style={{ color: '#fff', width: 30, height: 30 }} />
            </IconButton>
          </Navigation>
          <Title variant="h6" color="#fff" textTransform="uppercase" fontWeight="bold">
            Encrypted Traffic Analyzer
          </Title>
        </HeaderLayout>
      </Container>
    </HeaderWrapper>
  );
}