/**
 * Loader video size tiers.
 *
 * Each tier maps a viewport-width range to an authored video frame size.
 * Use `getLoaderVideoSize(viewportWidth)` to pick the active tier, then
 * scale the video inside its container with `object-fit: cover`
 * (CSS handles the fill — these dimensions are for your own scale-down math).
 *
 * Example: "medium" covers 1024–1440px viewports (laptop), authored at 1440×900.
 */
export type LoaderVideoSizeKey = "extraSmall" | "small" | "medium" | "large";

export type LoaderVideoSize = {
  key: LoaderVideoSizeKey;
  /** viewport min width in px (inclusive) */
  minWidth: number;
  /** viewport max width in px (inclusive), Infinity for the largest tier */
  maxWidth: number;
  /** authored video width in px — scale down from this */
  width: number;
  /** authored video height in px — scale down from this */
  height: number;
  /** optional per-tier asset path (wire up when you add files in public/video/) */
  src?: string;
};

export const loaderVideoSizes: Record<LoaderVideoSizeKey, LoaderVideoSize> = {
  extraSmall: {
    key: "extraSmall",
    minWidth: 0,
    maxWidth: 639,
    width: 360,
    height: 640,
    src: "/video/portrait/loader-portrait.webm",
  },
  small: {
    key: "small",
    minWidth: 640,
    maxWidth: 1023,
    width: 768,
    height: 1024,
    src: "/video/small/loader-small.webm",
  },
  medium: {
    key: "medium",
    minWidth: 1024,
    maxWidth: 1440,
    width: 1440,
    height: 900,
    src: "/video/large/loader-large.webm",
  },
  large: {
    key: "large",
    minWidth: 1441,
    maxWidth: Infinity,
    width: 1920,
    height: 1080,
    src: "/video/large/loader-large.webm",
  },
} as const satisfies Record<LoaderVideoSizeKey, LoaderVideoSize>;

/** Pick the active size tier for a viewport width. */
export function getLoaderVideoSize(viewportWidth: number): LoaderVideoSize {
  if (viewportWidth >= loaderVideoSizes.large.minWidth) return loaderVideoSizes.large;
  if (viewportWidth >= loaderVideoSizes.medium.minWidth) return loaderVideoSizes.medium;
  if (viewportWidth >= loaderVideoSizes.small.minWidth) return loaderVideoSizes.small;
  return loaderVideoSizes.extraSmall;
}

/**
 * Aspect ratio (width/height) for a tier — handy for scale-down math:
 *   canvasWidth = containerWidth
 *   canvasHeight = containerWidth / aspectRatio
 */
export function getLoaderVideoAspectRatio(size: LoaderVideoSize): number {
  return size.width / size.height;
}

// Convenience getters (map to individual tiers).
export const loaderSizeExtraSmall = () => loaderVideoSizes.extraSmall;
export const loaderSizeSmall = () => loaderVideoSizes.small;
export const loaderSizeMedium = () => loaderVideoSizes.medium;
export const loaderSizeLarge = () => loaderVideoSizes.large;
