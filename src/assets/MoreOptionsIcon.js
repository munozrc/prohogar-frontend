export default function MoreOptionsIcon(props) {
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
      <circle cx={256} cy={256} r={48} stroke="none" />
      <circle cx={256} cy={416} r={48} stroke="none" />
      <circle cx={256} cy={96} r={48} stroke="none" />
    </svg>
  );
}
