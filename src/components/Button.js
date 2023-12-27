import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;
        if (currentChange === nextChange && nextLocale === currentLocale) {
            return false;
        }
        return true;
    }

    render() {
        const { change, locale, show, enable } = this.props;
        if (!enable) return null;
        return (
            <>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'en-US' ? 'এখানে ক্লিক করুন' : 'Click here'} 
                </button>
                {show && <p>Hello React</p>}
            </>
            
        );
    }
}

export default Button;