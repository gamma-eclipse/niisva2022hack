import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import PolicyIcon from '@mui/icons-material/Policy';
import { Container, IconButton, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled('header')`
  background-color: ${(props) => props.theme.palette.primary.main};
  padding: 10px 0;
`;
const Navigation = styled('div')`
  display: flex;
`;
const Title = styled(Typography)``;

export function Header() {
  return (
    <HeaderWrapper>
      <Container maxWidth="lg">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Title color="#fff" textTransform="uppercase" fontWeight="bold">
            ENCRYPTED TRAFFIC ANALYZER
          </Title>
        </div>
      </Container>
    </HeaderWrapper>
  );
}
