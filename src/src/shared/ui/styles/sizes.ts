const BASE_UNIT = 'px';
const BASE_PX = 8;
const BASE_PERCENT_UNIT = '%';
const BASE_PERCENT = 100;
const MIN_WIDTH = 768;

export const GOLDEN_RATIO = 1.618;

/** z-index values */
export const zIndexBackground = 0;
export const zIndexMidground = 10;
export const zIndexForeground = 100;

/** media query values */
export const mSizeWidthDisplay = `${MIN_WIDTH}${BASE_UNIT}`;

/** spacing values */
export const xsSize = `${BASE_PX / GOLDEN_RATIO}${BASE_UNIT}`;
export const sSize = `${BASE_PX}${BASE_UNIT}`;
export const mSize = `${GOLDEN_RATIO * BASE_PX}${BASE_UNIT}`;
export const mlSize = `${GOLDEN_RATIO * GOLDEN_RATIO * BASE_PX}${BASE_UNIT}`;
export const lSize = `${2 * GOLDEN_RATIO * BASE_PX}${BASE_UNIT}`;
export const xlSize = `${2 * GOLDEN_RATIO * GOLDEN_RATIO * BASE_PX}${BASE_UNIT}`;
export const xxlSize = `${2.5 * GOLDEN_RATIO * GOLDEN_RATIO * BASE_PX}${BASE_UNIT}`;

/** percentage values */
export const mSizePercent = `${BASE_PERCENT / GOLDEN_RATIO}${BASE_PERCENT_UNIT}`;
export const mlSizePercent = `${(2 * BASE_PERCENT) / GOLDEN_RATIO}${BASE_PERCENT_UNIT}`;
export const xlSizePercent = `${(2 * BASE_PERCENT) / (GOLDEN_RATIO * GOLDEN_RATIO)}${BASE_PERCENT_UNIT}`;

