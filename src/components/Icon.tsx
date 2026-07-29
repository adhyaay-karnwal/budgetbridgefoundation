import { HugeiconsIcon, type HugeiconsIconProps } from "@hugeicons/react";

export type IconProps = HugeiconsIconProps;

/**
 * BBF icon primitive — renders Hugeicons (https://hugeicons.com).
 * Import icon data from `@hugeicons/core-free-icons` (or Pro packages).
 */
export function Icon({
  size = 24,
  color = "currentColor",
  strokeWidth = 1.5,
  ...props
}: IconProps) {
  return (
    <HugeiconsIcon
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
}
