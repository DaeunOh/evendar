import { forwardRef } from 'react';
import { IconProps } from '@constants/interfaces';
import { useTheme } from '@emotion/react';

const defaultWidth = 16;
const defaultHeight = 16;

export const ArrowFront = forwardRef<SVGSVGElement, IconProps>(
  ({ width = defaultWidth, height = defaultHeight, color, ...props }, ref) => {
    const theme = useTheme();
    return (
      <svg width={width} height={height} ref={ref} xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          transform={`scale(${width / defaultWidth}, ${height / defaultHeight})`}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.1746 13.0464C5.96494 12.8666 5.94066 12.551 6.12038 12.3413L9.84146 8.00027L6.12037 3.65879C5.94066 3.44912 5.96495 3.13348 6.17461 2.95377C6.38428 2.77406 6.69993 2.79835 6.87964 3.00802L10.8796 7.6749C11.0401 7.86215 11.0401 8.13845 10.8796 8.32569L6.87962 12.9921C6.6999 13.2018 6.38425 13.2261 6.1746 13.0464Z"
          fill={color || theme.color.gray[900]}
        />
      </svg>
    );
  },
);

ArrowFront.displayName = 'ArrowFront';
