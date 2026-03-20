/**
 * Theme config: presets and apply. Akira can change theme via set_theme tool; users can rely on mood-based presets.
 */

const COLOR_KEYS = [
  'color-fg',
  'color-fg-muted',
  'color-bg',
  'color-bg-main',
  'color-bg-sidebar',
  'color-bg-elevated',
  'color-bg-subtle',
  'color-border',
  'color-bubble-user',
  'color-highlight',
  'color-secondary',
  'color-send-btn',
  'color-send-btn-hover',
  'color-primary',
  'color-primary-hover',
  'color-error',
  'color-error-bg',
];

/** Neutral — moodless, light */
const neutral = {
  'color-fg': '#333333',
  'color-fg-muted': '#777777',
  'color-bg': '#FFFFFF',
  'color-bg-main': '#FFFFFF',
  'color-bg-sidebar': '#F8F8F8',
  'color-bg-elevated': '#FAFAFA',
  'color-bg-subtle': '#F0F0F0',
  'color-border': '#CCCCCC',
  'color-bubble-user': '#F0F0F0',
  'color-highlight': '#CCCCCC',
  'color-secondary': '#999999',
  'color-send-btn': '#CCCCCC',
  'color-send-btn-hover': '#DDDDDD',
  'color-primary': '#333333',
  'color-primary-hover': '#444444',
  'color-error': '#CC0000',
  'color-error-bg': '#FFF0F0',
};

/** Anxious — dim, contained */
const anxious = {
  'color-fg': '#444444',
  'color-fg-muted': '#777777',
  'color-bg': '#1A1A1A',
  'color-bg-main': '#222222',
  'color-bg-sidebar': '#2D2D2D',
  'color-bg-elevated': '#333333',
  'color-bg-subtle': '#3A3A3A',
  'color-border': '#444444',
  'color-bubble-user': '#3A3A3A',
  'color-highlight': '#555555',
  'color-secondary': '#4A4A4A',
  'color-send-btn': '#333333',
  'color-send-btn-hover': '#444444',
  'color-primary': '#444444',
  'color-primary-hover': '#555555',
  'color-error': '#CC0000',
  'color-error-bg': '#111111',
};

/** Calm — soft blue */
const calm = {
  'color-fg': '#2A8FCC',
  'color-fg-muted': '#99C1D6',
  'color-bg': '#F0F7FC',
  'color-bg-main': '#E0F0F8',
  'color-bg-sidebar': '#D0E0F0',
  'color-bg-elevated': '#C0D0E0',
  'color-bg-subtle': '#B0C0D0',
  'color-border': '#A0C0D0',
  'color-bubble-user': '#B0C0D0',
  'color-highlight': '#70A0C0',
  'color-secondary': '#80C0E0',
  'color-send-btn': '#2A8FCC',
  'color-send-btn-hover': '#3A9FDC',
  'color-primary': '#2A8FCC',
  'color-primary-hover': '#3A9FDC',
  'color-error': '#D64040',
  'color-error-bg': '#2C2C38',
};

/** Anger — intense red */
const anger = {
  'color-fg': '#FF3333',
  'color-fg-muted': '#FFB3B3',
  'color-bg': '#2C0000',
  'color-bg-main': '#330000',
  'color-bg-sidebar': '#440000',
  'color-bg-elevated': '#551111',
  'color-bg-subtle': '#662222',
  'color-border': '#FF4444',
  'color-bubble-user': '#FF4444',
  'color-highlight': '#FF6666',
  'color-secondary': '#CC3333',
  'color-send-btn': '#FF2222',
  'color-send-btn-hover': '#FF4444',
  'color-primary': '#FF3333',
  'color-primary-hover': '#FF5555',
  'color-error': '#FF0000',
  'color-error-bg': '#330000',
};

/** Excited — bright punchy */
const excited = {
  'color-fg': '#FF4400',
  'color-fg-muted': '#FFAA55',
  'color-bg': '#FFF3E0',
  'color-bg-main': '#FFD980',
  'color-bg-sidebar': '#FFC140',
  'color-bg-elevated': '#FFB366',
  'color-bg-subtle': '#FFD166',
  'color-border': '#FF9933',
  'color-bubble-user': '#FFB366',
  'color-highlight': '#FFCC66',
  'color-secondary': '#FFA500',
  'color-send-btn': '#FF4400',
  'color-send-btn-hover': '#FF6633',
  'color-primary': '#FF4400',
  'color-primary-hover': '#FF6633',
  'color-error': '#CC0000',
  'color-error-bg': '#330000',
};

/** Tired — minimal grayscale */
const tired = {
  'color-fg': '#555555',
  'color-fg-muted': '#999999',
  'color-bg': '#F5F5F5',
  'color-bg-main': '#FFFFFF',
  'color-bg-sidebar': '#F8F8F8',
  'color-bg-elevated': '#EEEEEE',
  'color-bg-subtle': '#DDDDDD',
  'color-border': '#CCCCCC',
  'color-bubble-user': '#EEEEEE',
  'color-highlight': '#CCCCCC',
  'color-secondary': '#BBBBBB',
  'color-send-btn': '#CCCCCC',
  'color-send-btn-hover': '#DDDDDD',
  'color-primary': '#555555',
  'color-primary-hover': '#666666',
  'color-error': '#CC0000',
  'color-error-bg': '#F0F0F0',
};

/** Happy — warm */
const happy = {
  'color-fg': '#FF8800',
  'color-fg-muted': '#FFCC66',
  'color-bg': '#FFF3E0',
  'color-bg-main': '#FFD980',
  'color-bg-sidebar': '#FFC140',
  'color-bg-elevated': '#FFB366',
  'color-bg-subtle': '#FFD166',
  'color-border': '#FFA500',
  'color-bubble-user': '#FFB366',
  'color-highlight': '#FFCC66',
  'color-secondary': '#FFA500',
  'color-send-btn': '#FF8800',
  'color-send-btn-hover': '#FF9933',
  'color-primary': '#FF8800',
  'color-primary-hover': '#FF9933',
  'color-error': '#CC0000',
  'color-error-bg': '#2C0000',
};

/** Sad — deep dark */
const sad = {
  'color-fg': '#333333',
  'color-fg-muted': '#666666',
  'color-bg': '#1A1A1A',
  'color-bg-main': '#222222',
  'color-bg-sidebar': '#2D2D2D',
  'color-bg-elevated': '#333333',
  'color-bg-subtle': '#3A3A3A',
  'color-border': '#444444',
  'color-bubble-user': '#3A3A3A',
  'color-highlight': '#555555',
  'color-secondary': '#4A4A4A',
  'color-send-btn': '#333333',
  'color-send-btn-hover': '#444444',
  'color-primary': '#333333',
  'color-primary-hover': '#444444',
  'color-error': '#990000',
  'color-error-bg': '#111111',
};

/** Curious — indigo, exploratory */
const curious = {
  'color-fg': '#5F4B8B',
  'color-fg-muted': '#9F8BAF',
  'color-bg': '#F0F0FF',
  'color-bg-main': '#E8E8FF',
  'color-bg-sidebar': '#D8D8FF',
  'color-bg-elevated': '#C8C8FF',
  'color-bg-subtle': '#B8B8FF',
  'color-border': '#A8A8FF',
  'color-bubble-user': '#B8B8FF',
  'color-highlight': '#A8A8FF',
  'color-secondary': '#9898FF',
  'color-send-btn': '#5F4B8B',
  'color-send-btn-hover': '#6F5B9B',
  'color-primary': '#5F4B8B',
  'color-primary-hover': '#6F5B9B',
  'color-error': '#CC0000',
  'color-error-bg': '#2C2C38',
};

/** Focused — teal, concentrated */
const focused = {
  'color-fg': '#00A896',
  'color-fg-muted': '#55C4B3',
  'color-bg': '#F0F8F7',
  'color-bg-main': '#E0F2F0',
  'color-bg-sidebar': '#D0E8E6',
  'color-bg-elevated': '#C0D8D6',
  'color-bg-subtle': '#B0C8C6',
  'color-border': '#A0B8B6',
  'color-bubble-user': '#B0C8C6',
  'color-highlight': '#A0B8B6',
  'color-secondary': '#90A8A6',
  'color-send-btn': '#00A896',
  'color-send-btn-hover': '#10B8A6',
  'color-primary': '#00A896',
  'color-primary-hover': '#10B8A6',
  'color-error': '#CC0000',
  'color-error-bg': '#2C2C38',
};

/** Impressed — purple, bold */
const impressed = {
  'color-fg': '#7B4DFF',
  'color-fg-muted': '#A184FF',
  'color-bg': '#F0F0FF',
  'color-bg-main': '#E8E8FF',
  'color-bg-sidebar': '#D8D8FF',
  'color-bg-elevated': '#C8C8FF',
  'color-bg-subtle': '#B8B8FF',
  'color-border': '#A8A8FF',
  'color-bubble-user': '#B8B8FF',
  'color-highlight': '#A8A8FF',
  'color-secondary': '#9898FF',
  'color-send-btn': '#7B4DFF',
  'color-send-btn-hover': '#8B5DFF',
  'color-primary': '#7B4DFF',
  'color-primary-hover': '#8B5DFF',
  'color-error': '#CC0000',
  'color-error-bg': '#2C2C38',
};

/** Concerned — soft lavender */
const concerned = {
  'color-fg': '#7B5C9A',
  'color-fg-muted': '#A085B5',
  'color-bg': '#F5F0FF',
  'color-bg-main': '#E8E0FF',
  'color-bg-sidebar': '#D8D0FF',
  'color-bg-elevated': '#C8C0FF',
  'color-bg-subtle': '#B8B0FF',
  'color-border': '#A8A0FF',
  'color-bubble-user': '#B8B0FF',
  'color-highlight': '#A8A0FF',
  'color-secondary': '#9890FF',
  'color-send-btn': '#7B5C9A',
  'color-send-btn-hover': '#8B6C9A',
  'color-primary': '#7B5C9A',
  'color-primary-hover': '#8B6C9A',
  'color-error': '#CC0000',
  'color-error-bg': '#2C2C38',
};

/** Confused — muted mauve */
const confused = {
  'color-fg': '#6E5A7A',
  'color-fg-muted': '#9E8BAA',
  'color-bg': '#F0EDEE',
  'color-bg-main': '#E8E4E6',
  'color-bg-sidebar': '#D8D4D6',
  'color-bg-elevated': '#C8C4C6',
  'color-bg-subtle': '#B8B4B6',
  'color-border': '#A8A4A6',
  'color-bubble-user': '#B8B4B6',
  'color-highlight': '#A8A4A6',
  'color-secondary': '#989496',
  'color-send-btn': '#6E5A7A',
  'color-send-btn-hover': '#7E6A8A',
  'color-primary': '#6E5A7A',
  'color-primary-hover': '#7E6A8A',
  'color-error': '#CC0000',
  'color-error-bg': '#2C2C38',
};

/** Thoughtful — slate, reflective */
const thoughtful = {
  'color-fg': '#4A4A5A',
  'color-fg-muted': '#7A7A8A',
  'color-bg': '#F0F0F2',
  'color-bg-main': '#E0E0E4',
  'color-bg-sidebar': '#D0D0D4',
  'color-bg-elevated': '#C0C0C4',
  'color-bg-subtle': '#B0B0B4',
  'color-border': '#A0A0A4',
  'color-bubble-user': '#B0B0B4',
  'color-highlight': '#A0A0A4',
  'color-secondary': '#909094',
  'color-send-btn': '#4A4A5A',
  'color-send-btn-hover': '#5A5A6A',
  'color-primary': '#4A4A5A',
  'color-primary-hover': '#5A5A6A',
  'color-error': '#CC0000',
  'color-error-bg': '#2C2C38',
};

/** Amused — dusky pink */
const amused = {
  'color-fg': '#C75A9C',
  'color-fg-muted': '#E59BA3',
  'color-bg': '#F8F2F4',
  'color-bg-main': '#E8D2D6',
  'color-bg-sidebar': '#D8C2C6',
  'color-bg-elevated': '#C8B2B6',
  'color-bg-subtle': '#B8A2A6',
  'color-border': '#A89296',
  'color-bubble-user': '#B8A2A6',
  'color-highlight': '#A89296',
  'color-secondary': '#988286',
  'color-send-btn': '#C75A9C',
  'color-send-btn-hover': '#D76A9C',
  'color-primary': '#C75A9C',
  'color-primary-hover': '#D76A9C',
  'color-error': '#CC0000',
  'color-error-bg': '#2C2C38',
};

/** Confident — blue-green, assured */
const confident = {
  'color-fg': '#00A88F',
  'color-fg-muted': '#55C4B3',
  'color-bg': '#F0F8F7',
  'color-bg-main': '#E0F2F0',
  'color-bg-sidebar': '#D0E8E6',
  'color-bg-elevated': '#C0D8D6',
  'color-bg-subtle': '#B0C8C6',
  'color-border': '#A0B8B6',
  'color-bubble-user': '#B0C8C6',
  'color-highlight': '#A0B8B6',
  'color-secondary': '#90A8A6',
  'color-send-btn': '#00A88F',
  'color-send-btn-hover': '#10B8A6',
  'color-primary': '#00A88F',
  'color-primary-hover': '#10B8A6',
  'color-error': '#CC0000',
  'color-error-bg': '#2C2C38',
};

export const THEME_PRESETS = {
  anger,
  happy,
  calm,
  sad,
  tired,
  neutral,
  excited,
  anxious,
  curious,
  focused,
  impressed,
  concerned,
  confused,
  thoughtful,
  amused,
  confident,
  // Backward compatibility: old preset names → same palettes
  default_light: neutral,
  default_dark: anxious,
  energetic: anger,
  focus: tired,
  cozy: happy,
  midnight: sad,
};

export const THEME_LABELS = {
  anger: 'Anger',
  happy: 'Happy',
  calm: 'Calm',
  sad: 'Sad',
  tired: 'Tired',
  neutral: 'Neutral',
  excited: 'Excited',
  anxious: 'Anxious',
  curious: 'Curious',
  focused: 'Focused',
  impressed: 'Impressed',
  concerned: 'Concerned',
  confused: 'Confused',
  thoughtful: 'Thoughtful',
  amused: 'Amused',
  confident: 'Confident',
};

/** Emoji for each emotion theme (shown in sidebar) */
export const THEME_EMOJI = {
  anger: '😠',
  happy: '😊',
  calm: '😌',
  sad: '😢',
  tired: '😴',
  neutral: '😐',
  excited: '🤩',
  anxious: '😰',
  curious: '🤔',
  focused: '🎯',
  impressed: '😮',
  concerned: '😟',
  confused: '😕',
  thoughtful: '💭',
  amused: '😏',
  confident: '😎',
};

/**
 * Current theme name from the document (set by applyTheme).
 * @returns {string|null}
 */
export function getCurrentThemeName() {
  return document.documentElement.getAttribute('data-theme') || null;
}

/**
 * Emoji for the current theme, or a default if unknown/custom.
 * @returns {string}
 */
export function getCurrentThemeEmoji() {
  const name = getCurrentThemeName();
  return (name && THEME_EMOJI[name]) ? THEME_EMOJI[name] : '✨';
}

const STORAGE_KEY = 'akira_theme';

/**
 * Apply a theme by preset name or by a partial colors object.
 * @param {string|Record<string, string>} presetNameOrColors - Preset key (e.g. 'calm') or object of CSS var values
 * @param {boolean} persist - If true, save to localStorage and used on next load
 * @returns {string} Applied theme name (for presets) or 'custom'
 */
export function applyTheme(presetNameOrColors, persist = true) {
  const root = document.documentElement;
  let themeName = 'custom';
  let colors = {};

  if (typeof presetNameOrColors === 'string') {
    const key = presetNameOrColors.trim();
    if (THEME_PRESETS[key]) {
      themeName = key;
      colors = { ...(THEME_PRESETS[key] || {}) };
    } else {
      return null;
    }
  } else if (typeof presetNameOrColors === 'object' && presetNameOrColors !== null) {
    colors = presetNameOrColors;
  } else {
    return null;
  }

  COLOR_KEYS.forEach((key) => {
    const value = colors[key];
    if (value != null) root.style.setProperty(`--${key}`, value);
  });
  root.setAttribute('data-theme', themeName);

  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme: themeName, colors: themeName === 'custom' ? colors : undefined }));
    } catch (_) {}
  }
  return themeName;
}

/**
 * Get the currently stored theme from localStorage (does not apply).
 * @returns {{ theme: string, colors?: Record<string, string> } | null}
 */
export function getStoredTheme() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (_) {
    return null;
  }
}

/**
 * Apply stored theme on load. Call once at app init.
 */
export function applyStoredTheme() {
  const stored = getStoredTheme();
  if (!stored) return null;
  if (stored.theme && THEME_PRESETS[stored.theme]) {
    applyTheme(stored.theme, false);
    return stored.theme;
  }
  if (stored.colors && typeof stored.colors === 'object') {
    applyTheme(stored.colors, false);
    return 'custom';
  }
  return null;
}

export default THEME_PRESETS;
