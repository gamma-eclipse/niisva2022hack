import { Button, Collapse, Typography, styled } from '@mui/material';
import { useState } from 'react';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Head = styled('div')`
  display: flex;
  gap: 25px;
  align-items: flex-end;
`;

export function Spoiler({ title, children }) {
  const [open, setOpen] = useState(true);

  return (
    <Wrapper>
      <Head>
        <Typography variant="h4">{title}</Typography>
        <Button variant="contained" onClick={() => setOpen(!open)}>
          {open ? 'Закрыть' : 'Открыть'}
        </Button>
      </Head>
      <Collapse in={open} timeout="auto">
        {children}
      </Collapse>
    </Wrapper>
  );
}
