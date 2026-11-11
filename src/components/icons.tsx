type TIconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

export function YoutubeIcon({
  size = 24,
  strokeWidth = 2,
  className,
  ...rest
}: TIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

export function VkIcon({
  size = 24,
  strokeWidth = 2,
  className,
  ...rest
}: TIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M11.06 5.48L12.61 5.49L13.15 5.6L13.38 5.74L13.5 6.09L13.56 11.19L13.71 11.79L13.94 12.22L14.35 12.47L14.64 12.44L15.08 12.13L16.51 10.56L18.03 8.47L19.06 6.59L19.55 6.47L22.55 6.47L23.2 6.66L23.24 6.98L22.97 7.55L20.13 11.88L19.55 12.98L19.75 13.43L20.15 13.93L23.18 17.46L23.43 17.91L23.28 18.27L22.86 18.45L22.41 18.51L19 18.5L18.32 18.1L15.73 16L15.03 15.63L14.44 15.52L14.1 15.65L13.89 15.96L13.63 17.76L13.37 18.34L12.93 18.51L10.74 18.51L9.86 18.26L8.69 17.65L7.42 16.68L6.04 15.34L4.21 13.18L2.22 10.29L1.02 8.03L0.67 7.15L0.68 6.68L0.81 6.57L1.31 6.47L4.03 6.47L4.48 6.58L5.58 8.86L6.44 10.34L7.02 11.17L7.94 12.08L8.41 12.36L8.95 12.47L9.23 12.32L9.41 11.76L9.47 8.72L9.18 7.22L8.66 6.36L8.93 5.97L9.44 5.74Z" />
    </svg>
  );
}
