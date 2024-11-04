import styled from '@emotion/styled';

export const HeaderToolbarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  flex-shrink: 0;
  .evd-toolbar-prev-button + .evd-toolbar-next-button {
    border-left: 0px;
  }
`;

export const LeftSideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RightSideWrapper = styled.div``;
