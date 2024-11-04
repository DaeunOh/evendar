import styled from '@emotion/styled';

export const ViewSelectContainer = styled.div`
  width: 80px;
  height: 32px;
`;

export const SelectButton = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  ${({ theme }) => theme.text.s.regular};
  color: ${({ theme }) => theme.color.gray[900]};
  border: 1px solid ${({ theme }) => theme.color.gray[300]};
  background: none;
  border-radius: 8px;
`;

export const OptionList = styled.ul`
  width: 80px;
  height: 88px;
  position: absolute;
  padding: 8px 0px;
  margin-top: 8px;
  background: ${({ theme }) => theme.color.white[100]};
  box-shadow: 0 0 8px 0;
  border-radius: 8px;
`;

export const Option = styled.li<{ isSelected: boolean }>`
  width: 100%;
  height: 36px;
  padding: 10px 20px;
  ${({ theme }) => theme.text.s.regular};
  color: ${({ theme }) => theme.color.gray[900]};
  ${({ isSelected, theme }) => isSelected && `background: ${theme.color.black[4]};`}
  :hover {
    cursor: pointer;
  }
  list-style: none;
`;
