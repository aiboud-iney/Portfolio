type Color = 'violet' | 'magenta' | 'lime';

const rgb: Record<Color, string> = {
  violet:  '123,47,247',
  magenta: '255,46,136',
  lime:    '198,255,61',
};
const alpha: Record<Color, number> = {
  violet:  0.38,
  magenta: 0.30,
  lime:    0.16,
};

interface Props {
  color?: Color;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function SprayHaze({ color = 'violet', size = 520, className = '', style }: Props) {
  const r = rgb[color];
  const a = alpha[color];
  return (
    <div
      aria-hidden="true"
      className={`absolute pointer-events-none ${className}`}
      style={{
        width:  size,
        height: size,
        background: `radial-gradient(circle, rgba(${r},${a}) 0%, rgba(${r},0) 68%)`,
        ...style,
      }}
    />
  );
}
