export type Accent = 'mint' | 'lavender';

/** Maps a vessel accent to its CSS custom properties. */
export const accentVars = (accent: Accent) => ({
  color: `var(--${accent})`,
  deep: `var(--${accent}-deep)`,
});
