type Props = {
  size?: number;
  className?: string;
};

export default function MonogramBadge({ size = 64, className = "" }: Props) {
  return (
    <img
      src="/brand/monogram-pink-stamp-no-bg.svg"
      alt=""
      width={size}
      height={size}
      className={className}
    />
  );
}
