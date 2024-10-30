import styled from '@emotion/styled';

export const MonthlyCalendarContainer = styled.div<{ width: string | number; height: string | number }>`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.gray[900]};
  ${({ width, height }) => `
    width: ${typeof width === 'string' ? width : `${width}px`};
    height: ${typeof height === 'string' ? height : `${height}px`};
  `}
  overflow-y: auto;
`;

export const CellContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const DayCellRow = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  height: calc(100% / 6);
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[200]};
`;
