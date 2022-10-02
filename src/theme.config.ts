const color = {
    // fa647c
    primary: {
        gold: '#ffd600',
        poliDark: '#151515',
        poliLime: '#fa647c',
        poliNavy: '#1f1a40',
        poliPink: '#ed1e79',
        poliPurple: '#fa647c'
    },
    secondary: {
        poliGold16: 'rgba(255, 214, 0, 0.16)',
        poliGold32: 'rgba(255, 214, 0, 0.32)',
        poliGold56: 'rgba(255, 214, 0, 0.56)',
        poliGold72: 'rgba(255, 214, 0, 0.72)',
        poliGold80: 'rgba(255, 214, 0, 0.8)',
        poliLime16: 'rgba(21, 206, 146, 0.16)',
        poliLime32: 'rgba(21, 206, 146, 0.32)',
        poliLime56: 'rgba(21, 206, 146, 0.56)',
        poliLime72: 'rgba(21, 206, 146, 0.72)',
        poliLime80: 'rgba(21, 206, 146, 0.8)',
        poliPink16: 'rgba(237, 30, 121, 0.16)',
        poliPink32: 'rgba(237, 30, 121, 0.32)',
        poliPink56: 'rgba(237, 30, 121, 0.56)',
        poliPink72: 'rgba(237, 30, 121, 0.72)',
        poliPink80: 'rgba(237, 30, 121, 0.8)',
        poliPurple16: 'rgba(150, 1, 240, 0.16)',
        poliPurple32: 'rgba(150, 1, 240, 0.32)',
        poliPurple56: 'rgba(150, 1, 240, 0.56)',
        poliPurple72: 'rgba(150, 1, 240, 0.72)',
        poliPurple80: 'rgba(150, 1, 240, 0.8)',

    },
    default: {
        black: '#000',
        white: '#fff'
    },
    grey: {
        grey300: '#e5e7eb',
        grey400: '#9ca3af',
        grey50: '#f9fafb',
        grey500: '#6b7280',
        grey600: '#4b5563',
        grey900: '#111827',
        grey950: '#131119'
    },
    success: {
        success400: '#34d399',
        success50: '#ecfdf5',
        success600: '#059669',
        success900: '#064e3b',
        success500: '#10b981'
    },
    info: {
        info400: '#60a5fa',
        info50: '#eff6ff',
        info600: '#2563eb',
        info900: '#1e3a8a',
        info500: '#3b82f6'
    },
    warning: {
        warning400: '#fbbf24',
        warning500: '#f59e0b',
        warning50: '#fffbeb',
        warning600: '#d97706',
        warning900: '#78350f'
    },
    error: {
        error400: '#f87171',
        error50: '#fef2f2',
        error500: '#ef4444',
        error600: '#dc2626',
        error900: '#7f1d1d'
    },
    opacity: {
        dark12: 'rgba(0, 0, 0, 0.12)',
        dark16: 'rgba(0, 0, 0, 0.16)',
        dark24: 'rgba(0, 0, 0, 0.24)',
        dark40: 'rgba(0, 0, 0, 0.4)',
        dark56: 'rgba(0, 0, 0, 0.56)',
        dark72: 'rgba(0, 0, 0, 0.72)',
        dark8: 'rgba(0, 0, 0, 0.08)',
        light12: 'rgba(255, 255, 255, 0.12)',
        light16: 'rgba(255, 255, 255, 0.16)',
        light24: 'rgba(255, 255, 255, 0.24)',
        light40: 'rgba(255, 255, 255, 0.4)',
        light56: 'rgba(255, 255, 255, 0.56)',
        light72: 'rgba(255, 255, 255, 0.72)',
        light8: 'rgba(255, 255, 255, 0.08)'
    }
};

export const fontSize = {
    /** font-size: 10px */
    xSmall: '1rem',
    /** font-size: 12px */
    small: '1.2rem',
    /** font-size: 14px */
    xRegular: '1.4rem',
    /** font-size: 16px */
    regular: '1.6rem',
    /** font-size: 24px */
    medium: '2.4rem',
    /** font-size: 32px */
    big: '3.2rem',
    /** font-size: 40px */
    xBig: '4rem',
    /** font-size: 64px */
    xxBig: '6.4rem'
};

export const fontWeight = {
    /** font-weight: 400 */
    regular: '400',
    /** font-weight: 600 */
    medium: '600',
    /** font-weight: 700 */
    bold: '700'
};

export const mediaQuery = {
    /** mobile: 415px */
    mobile: 'screen and (min-width: 415px)',
    /** xMobile: 480px */
    xMobile: 'screen and (min-width: 480px)',
    /** tablet: 768px */
    tablet: 'screen and (min-width: 768px)',
    /** desktop: 1024px */
    desktop: 'screen and (min-width: 1024px)',
    /** large desktop: 1200px */
    largeDesktop: 'screen and (min-width: 1200px)',
    /** xLargeDesktop: 1366px */
    xLargeDesktop: 'screen and (min-width: 1366px)',
    /** xxLargeDesktop: 1440px */
    xxLargeDesktop: 'screen and (min-width: 1440px)',
};


export const links = {
    light: {
        txtColor: color.default.white,
        txtColorSecondary: color.primary.poliPurple,
    },
    dark: {
        txtColor: color.primary.poliPurple,
        txtColorSecondary: color.default.white,
    }
};


export const mainSection = {
    light: {
        bgColor: color.default.white,
        bgColorSecondary: color.primary.poliLime,

        txtColor: color.grey.grey900,
        txtColorSecondary: color.opacity.dark72,
    },
    dark: {
        bgColor: color.primary.poliNavy,
        bgColorSecondary: color.primary.poliDark,
        bgColorTertiary: color.secondary.poliPurple32,

        borderColor: color.opacity.light8,

        txtColor: color.default.white,
        txtColorSecondary: color.opacity.light72,
        txtColorTertiary: color.primary.poliPurple,
        txtColorQuaternary: color.primary.poliPink,
        txtColorQuinary: color.grey.grey400,

    }
};

export const footer = {
    bgColor: color.default.black,
    bgColorSecondary: color.opacity.light12,

    txtColor: color.default.white,
    txtColorSecondary: color.opacity.light56,
};
