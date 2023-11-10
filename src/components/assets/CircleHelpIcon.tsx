interface CircleHelpIconProps {
  size?: number;
  color?: string;
}

export default function CircleHelpIcon({ size = 20, color = '#004DBC' }: CircleHelpIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d="M3.33331 10C3.33331 13.6819 6.31808 16.6667 9.99998 16.6667C13.6819 16.6667 16.6666 13.6819 16.6666 10C16.6666 6.3181 13.6819 3.33334 9.99998 3.33334C6.31808 3.33334 3.33331 6.3181 3.33331 10Z"
        stroke={color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.14819 7.61292C8.25664 7.27878 8.45528 6.98142 8.72235 6.75319C8.98942 6.52496 9.31474 6.37498 9.66171 6.31993C10.0087 6.26488 10.3639 6.3068 10.6885 6.44116C11.0131 6.57553 11.2942 6.79716 11.5007 7.08133C11.7073 7.3655 11.831 7.70114 11.8586 8.05135C11.8862 8.40156 11.8164 8.75268 11.6569 9.0657C11.4974 9.37872 11.2548 9.64135 10.9553 9.82492C10.6557 10.0085 9.95995 10.1953 9.95995 10.7408V11.1112"
        stroke={color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.99998" cy="13.3333" r="0.666667" fill={color} />
    </svg>
  );
}
