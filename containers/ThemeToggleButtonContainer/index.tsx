import React, { useContext } from 'react';
import ThemeToggleButton from 'components/commons/ThemeToggleButton';
import { ActionType, ThemeContext } from 'lib/ThemeContext';
import { Theme } from 'types/theme';

const ThemeToggleButtonContainer: React.FC = () => {
    const { theme, dispatch } = useContext(ThemeContext);

    const onThemeToggle = () => {
        dispatch(ActionType.TOGGLE_THEME, {});
    };

    return (
        <ThemeToggleButton on={theme === Theme.LIGHT}
                           onClick={onThemeToggle}
        />
    );
};

export default ThemeToggleButtonContainer;
