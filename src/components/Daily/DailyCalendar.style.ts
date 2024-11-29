import styled from '@emotion/styled';

export const DailyCalendarContainer = styled.div<{ width: string | number; height: string | number }>`
  display: flex;
  flex-direction: column;
  ${({ width, height }) => `
    width: ${typeof width === 'string' ? width : `${width}px`};
    height: ${typeof height === 'string' ? height : `${height}px`};
  `}
  overflow-y:hidden;
  color: ${({ theme }) => theme.color.gray[900]};
`;

export const AllDayCellContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 122px;
  max-height: 184px;
  padding-left: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[200]};
`;

export const AllDaySlot = styled.div`
  display: flex;
  width: 52px;
  flex-shrink: 0;
  justify-content: right;
  padding-top: 8px;
  ${({ theme }) => theme.text.xs.regular};
`;

export const AllDayCellRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const TimeCellContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 16px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TimeSlotCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 52px;
  flex-shrink: 0;
`;

export const TimeSlot = styled.div`
  display: flex;
  height: 60px;
  flex-shrink: 0;
  margin-left: auto;
  :first-child > span {
    display: none;
  }
`;

export const Time = styled.span`
  position: relative;
  top: -6px;
  color: ${({ theme }) => theme.color.gray[600]};
  ${({ theme }) => theme.text.xs.regular};
`;

export const TimeCellContentContainer = styled.div`
  display: inline-flex;
  width: 100%;
  height: fit-content;
  position: relative;
`;

export const TimeCellGrid = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

export const TimeCellGridLine = styled.div`
  height: 60px;
  flex-shrink: 0;
  ::after {
    width: 100%;
    position: absolute;
    content: '';
    border-bottom: 1px solid ${({ theme }) => theme.color.gray[200]};
  }
  :first-of-type::after {
    border-width: 0px;
  }
`;
