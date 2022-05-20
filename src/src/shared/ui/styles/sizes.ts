export const GOLDEN_RATIO = 1.618;
const BASE_UNIT = 'px';
const BASE_PX = 8;
const BASE_PERCENT_UNIT = '%';
const BASE_PERCENT = 100;
const MIN_WIDTH = 768;

export const xsSize = `${BASE_PX / GOLDEN_RATIO}${BASE_UNIT}`;
export const sSize = `${BASE_PX}${BASE_UNIT}`;
export const mSize = `${GOLDEN_RATIO * BASE_PX}${BASE_UNIT}`;
export const mlSize = `${GOLDEN_RATIO * GOLDEN_RATIO * BASE_PX}${BASE_UNIT}`;
export const lSize = `${2 * GOLDEN_RATIO * BASE_PX}${BASE_UNIT}`;
export const xlSize = `${2 * GOLDEN_RATIO * GOLDEN_RATIO * BASE_PX}${BASE_UNIT}`;
export const xxlSize = `${2.5 * GOLDEN_RATIO * GOLDEN_RATIO * BASE_PX}${BASE_UNIT}`;

export const mSizePercent = `${BASE_PERCENT / GOLDEN_RATIO}${BASE_PERCENT_UNIT}`;
export const mlSizePercent = `${(2 * BASE_PERCENT) / GOLDEN_RATIO}${BASE_PERCENT_UNIT}`;
export const xlSizePercent = `${(2 * BASE_PERCENT) / (GOLDEN_RATIO * GOLDEN_RATIO)}${BASE_PERCENT_UNIT}`;

export const mSizeWidthDisplay = `${MIN_WIDTH}${BASE_UNIT}`;

export const zIndexBase = 0;
export const zIndexMidground = 10;
