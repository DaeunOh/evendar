import { forwardRef } from 'react';
import { IconProps } from '@constants/interfaces';
import { useTheme } from '@emotion/react';

const defaultWidth = 16;
const defaultHeight = 16;

export const ArrowBottom = forwardRef<SVGSVGElement, IconProps>(
  ({ width = defaultWidth, height = defaultHeight, color, ...props }, ref) => {
    const theme = useTheme();
    return (
      <svg width={width} height={height} ref={ref} xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          transform={`scale(${width / defaultWidth}, ${height / defaultHeight})`}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.61591 6.17982C3.7927 5.96768 4.10798 5.93903 4.32011 6.11582L7.99984 9.1824L11.6799 6.1158C11.8921 5.93902 12.2074 5.96769 12.3841 6.17984C12.5609 6.39198 12.5322 6.70726 12.3201 6.88404L8.31991 10.2174C8.13448 10.3719 7.86515 10.3719 7.67973 10.2174L3.67991 6.88402C3.46778 6.70724 3.43912 6.39195 3.61591 6.17982Z"
          fill={color || theme.color.gray[900]}
        />
      </svg>
    );
  },
);

ArrowBottom.displayName = 'ArrowBottom';
