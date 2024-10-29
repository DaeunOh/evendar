import { useRef, MouseEvent } from 'react';

interface Props {
  onClick?: ({ jsEvent }: { jsEvent: MouseEvent }) => void;
  onDoubleClick?: ({ jsEvent }: { jsEvent: MouseEvent }) => void;
}

export const useDoubleClick = ({ onClick, onDoubleClick }: Props) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = (jsEvent: MouseEvent) => {
    jsEvent.stopPropagation();
    if (timerRef.current !== null) return;
    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      onClick?.({ jsEvent });
    }, 250);
  };

  const handleDblClick = (jsEvent: MouseEvent) => {
    jsEvent.stopPropagation();
    clearTimeout(timerRef.current!);
    timerRef.current = null;
    onDoubleClick?.({ jsEvent });
  };

  return {
    ...(onClick && { onClick: handleClick }),
    ...(onDoubleClick && { onDoubleClick: handleDblClick }),
  };
};
