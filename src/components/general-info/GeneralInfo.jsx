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
      totalPackages: 0,
      totalTraffic: 0,
    };

    for (const analyze of analyzes) {
      x.totalPackages += analyze.packages;
      x.totalTraffic += analyze.traffic;
    }

    return x;
  }, [analyzes]);

  return (
    <Wrapper>
      <Typography variant="h4">Общая информация</Typography>
      <div>
        <Typography variant="h6">Получено пакетов: {data.totalPackages}</Typography>
        <Typography variant="h6">Получено трафика: {data.totalTraffic}</Typography>
      </div>
    </Wrapper>
  );
}
