import { Typography, styled } from '@mui/material';
import { useMemo } from 'react';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export function GeneralInfo({ analyzes }) {
  const data = useMemo(() => {
    const x = {
      totalTraffic: 0,
    };

    for (const analyze of analyzes) {
      x.totalTraffic += +analyze.traffic;
    }

    return x;
  }, [analyzes]);

  return (
    <Wrapper>
      <Typography variant="h4">Общая информация</Typography>
      <div>
        <Typography variant="h6">Передано трафика: {data.totalTraffic} байт</Typography>
      </div>
    </Wrapper>
  );
}
