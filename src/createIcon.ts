import { createElement, type FunctionComponent, type SVGProps } from 'react';

/** The shapes that make up an icon: `[tag, attributes]` pairs drawn on a 24×24 grid. */
export type IconNode = ReadonlyArray<readonly [tag: string, attrs: Readonly<Record<string, string>>]>;

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Width and height. Numbers are pixels; strings can be any CSS length. @default 24 */
  size?: number | string;
  /** Stroke (and fill, for solid icons) colour. @default 'currentColor' */
  color?: string;
  /** Line thickness on the 24px grid. @default 2 */
  strokeWidth?: number | string;
  /** Keep `strokeWidth` in screen pixels whatever the `size`. @default false */
  absoluteStrokeWidth?: boolean;
  /** Accessible name. Without one the icon is treated as decorative and hidden from screen readers. */
  title?: string;
}

export type ApenIcon = FunctionComponent<IconProps>;

const toKebab = (name: string) => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

export function createIcon(name: string, node: IconNode): ApenIcon {
  const baseClass = `apen-icon apen-icon-${toKebab(name)}`;

  function Icon({
    size = 24,
    color = 'currentColor',
    strokeWidth = 2,
    absoluteStrokeWidth = false,
    title,
    className,
    children,
    ...rest
  }: IconProps) {
    const pixels = Number(size);
    const labelled = Boolean(title || rest['aria-label'] || rest['aria-labelledby']);

    return createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: color,
        strokeWidth: absoluteStrokeWidth && pixels > 0 ? (Number(strokeWidth) * 24) / pixels : strokeWidth,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        className: className ? `${baseClass} ${className}` : baseClass,
        'aria-hidden': labelled ? undefined : true,
        role: labelled ? 'img' : undefined,
        ...rest,
      },
      title ? createElement('title', null, title) : null,
      ...node.map(([tag, attrs], i) =>
        // Solid shapes follow the `color` prop too, not only the inherited CSS colour.
        createElement(tag, { key: i, ...attrs, ...(attrs.fill === 'currentColor' ? { fill: color } : null) }),
      ),
      children,
    );
  }

  Icon.displayName = name;
  return Icon;
}
