export default function DescriptionIcon(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width={320}
        height={416}
        x={96}
        y={48}
        fill="none"
        strokeLinejoin="round"
        strokeWidth={32}
        rx={48}
        ry={48}
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M176 128h160m-160 80h160m-160 80h80"
      />
    </svg>
  );
}
