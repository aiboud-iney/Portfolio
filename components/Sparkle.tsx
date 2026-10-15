interface Props {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Sparkle({ size = 46, color = '#EDE8DF', className = '', style }: Props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`absolute pointer-events-none ${className}`}
      style={style}
    >
      <path d="M50 0l9 41 41 9-41 9-9 41-9-41-41-9 41-9z" fill={color} />
    </svg>
  );
}
