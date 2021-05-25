export default function OkIcon(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 48 48"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle fill="#4CAF50" cx={24} cy={24} r={21} stroke="none" />
      <path
        fill="#CCFF90"
        stroke="none"
        d="M34.6 14.6L21 28.2l-5.6-5.6-2.8 2.8 8.4 8.4 16.4-16.4z"
      />
    </svg>
  );
}
