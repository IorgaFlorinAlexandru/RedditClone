import { Theme } from "../enums/theme.enum";

const STORAGE_THEME_KEY = 'theme';

export function saveThemeToLocalStorage(theme: Theme) {
    localStorage.setItem(STORAGE_THEME_KEY, theme);
    setDarkBodyClass(theme);
}

export function getThemeFromLocalStorage(): string {
    const theme = localStorage.getItem(STORAGE_THEME_KEY) ?? Theme.LIGHT;
    setDarkBodyClass(theme as Theme);

    return theme;
}

function setDarkBodyClass(theme: Theme): void {
    if(theme === Theme.DARK) {
        document.body.classList.add('dark');
        return; 
    }

    document.body.classList.remove('dark');
}
