import clsx from 'clsx';
import React from 'react';

export type Fonts = 'thin' | 'light' | 'regular' | 'normal' | 'semibold' | 'bold' | 'extrabold';

interface ITypography<T extends { className?: string }>
  extends React.PropsWithChildren<Partial<Pick<T, 'className'>>> {
  font: Fonts;
}

export const H1 = ({
  children,
  className,
  font,
}: ITypography<HTMLHeadingElement>): React.ReactElement => (
  <h1
    className={clsx(className, baseClassHeader, 'text-4xl md:text-6xl', getTypographyFonts(font))}
  >
    {children}
  </h1>
);

export const H2 = ({
  children,
  className,
  font,
}: ITypography<HTMLHeadingElement>): React.ReactElement => (
  <h2
    className={clsx(className, baseClassHeader, 'text-3xl md:text-5xl', getTypographyFonts(font))}
  >
    {children}
  </h2>
);

export const H3 = ({
  children,
  className,
  font,
}: ITypography<HTMLHeadingElement>): React.ReactElement => (
  <h3
    className={clsx(className, baseClassHeader, 'text-2xl md:text-4xl', getTypographyFonts(font))}
  >
    {children}
  </h3>
);

export const ParagraphSmall = ({
  children,
  className,
  font,
}: ITypography<HTMLParagraphElement>): React.ReactElement => (
  <p
    className={clsx(className, baseClassParagraph, 'text-xs md:text-sm', getTypographyFonts(font))}
  >
    {children}
  </p>
);

export const ParagraphBase = ({
  children,
  className,
  font,
}: ITypography<HTMLParagraphElement>): React.ReactElement => (
  <p
    className={clsx(
      className,
      baseClassParagraph,
      'text-sm md:text-base',
      getTypographyFonts(font)
    )}
  >
    {children}
  </p>
);

export const ParagraphLarge = ({
  children,
  className,
  font,
}: ITypography<HTMLParagraphElement>): React.ReactElement => (
  <p
    className={clsx(
      className,
      baseClassParagraph,
      'text-base md:text-lg',
      getTypographyFonts(font)
    )}
  >
    {children}
  </p>
);

const baseClassHeader = 'leading-more-loose md:leading-more-loose';
const baseClassParagraph = 'leading-more-relaxed md:leading-more-relaxed';
const getTypographyFonts = (font: Fonts): Record<string, boolean> => ({
  ['font-thin']: font === 'thin',
  ['font-light']: font === 'light',
  ['font-normal']: font === 'regular',
  ['font-semibold']: font === 'semibold',
  ['font-bold']: font === 'bold',
  ['font-extrabold']: font === 'extrabold',
});
