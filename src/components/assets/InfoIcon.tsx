interface InfoIconProps {
  size?: number;
  color?: string;
}

export default function InfoIcon({ size = 20, color = '#666D7B' }: InfoIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d="M10 9.58331V12.9629M10 16.6666C6.31811 16.6666 3.33334 13.6819 3.33334 9.99998C3.33334 6.31808 6.31811 3.33331 10 3.33331C13.6819 3.33331 16.6667 6.31808 16.6667 9.99998C16.6667 13.6819 13.6819 16.6666 10 16.6666ZM10.0369 7.03702V7.11109L9.96312 7.11124V7.03702H10.0369Z"
        stroke={color}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
