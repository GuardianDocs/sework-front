export const colors = {
  white: '--white',
  black: '--black',

  gray50: '--gray-50',
  gray100: '--gray-100',
  gray200: '--gray-200',
  gray300: '--gray-300',
  gray400: '--gray-400',
  gray500: '--gray-500',
  gray600: '--gray-600',
  gray700: '--gray-700',
  gray800: '--gray-800',
  gray900: '--gray-900',

  blue50: '--blue-50',
  blue100: '--blue-100',
  blue200: '--blue-200',
  blue300: '--blue-300',
  blue400: '--blue-400',
  blue500: '--blue-500',
  blue600: '--blue-600',
  blue700: '--blue-700',
  blue800: '--blue-800',
  blue900: '--blue-900',

  red50: '--red-50',
  red100: '--red-100',
  red200: '--red-200',
  red300: '--red-300',
  red400: '--red-400',
  red500: '--red-500',
  red600: '--red-600',
  red700: '--red-700',
  red800: '--red-800',
  red900: '--red-900',

  green50: '--green-50',
  green100: '--green-100',
  green200: '--green-200',
  green300: '--green-300',
  green400: '--green-400',
  green500: '--green-500',
  green600: '--green-600',
  green700: '--green-700',
  green800: '--green-800',
  green900: '--green-900',
} as const;

export type ColorKey = keyof typeof colors;
export type Color = (typeof colors)[ColorKey];

export const getColor = (key: ColorKey) => colors[key];
export const getTailwindColorClassSuffix = (color: Color) => {
  const colorClass = color.replace('--', '-');
  return colorClass;
};
