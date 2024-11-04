import { useCallback, useState } from 'react';
import { ArrowBottom } from '@assets/icons/ArrowBottom';
import * as S from './ViewSelect.style';
import { ViewSelectProps } from '@constants/interfaces';

const ViewSelect = <T extends string | number>({ defaultValue, items, onChange }: ViewSelectProps<T>) => {
  const [optionVisible, setOptionVisible] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<T>(defaultValue);

  const handleChange = useCallback(
    (item: T) => {
      setSelectedValue(item);
      if ('function' === typeof onChange) onChange(item);
    },
    [onChange],
  );

  return (
    <S.ViewSelectContainer className="evd-toolbar-view-select">
      <S.SelectButton
        className="evd-select-button"
        onClick={() => setOptionVisible(true)}
        onBlur={() => setOptionVisible(false)}
      >
        {selectedValue}
        <ArrowBottom />
      </S.SelectButton>
      {optionVisible && (
        <S.OptionList className="evd-select-option-list">
          {items?.map(({ label, value }) => (
            <S.Option
              isSelected={value === selectedValue}
              className="evd-select-option"
              key={`select-option-${label}-${value}`}
              onMouseDown={() => handleChange(value)}
            >
              {label}
            </S.Option>
          ))}
        </S.OptionList>
      )}
    </S.ViewSelectContainer>
  );
};

export default ViewSelect;
