import { forwardRef } from 'react';
import { IconProps } from '@constants/interfaces';
import { useTheme } from '@emotion/react';

const defaultWidth = 16;
const defaultHeight = 16;

export const ArrowBack = forwardRef<SVGSVGElement, IconProps>(
  ({ width = defaultWidth, height = defaultHeight, color, ...props }, ref) => {
    const theme = useTheme();
    return (
      <svg width={width} height={height} ref={ref} xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          transform={`scale(${width / defaultWidth}, ${height / defaultHeight})`}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.8254 2.95364C10.0351 3.13336 10.0593 3.44901 9.87962 3.65867L6.15854 7.99973L9.87964 12.3412C10.0593 12.5509 10.0351 12.8665 9.82539 13.0462C9.61572 13.2259 9.30007 13.2016 9.12036 12.992L5.12036 8.3251C4.95987 8.13785 4.95988 7.86155 5.12038 7.67431L9.12038 3.00786C9.3001 2.7982 9.61575 2.77392 9.8254 2.95364Z"
          fill={color || theme.color.gray[900]}
        />
      </svg>
    );
  },
);

ArrowBack.displayName = 'ArrowBack';
