import polyglotI18nProvider from 'ra-i18n-polyglot';
import chineseMessages from './i18n/zh';

const messages = {
    // en: () => import('./i18n/en').then(messages => messages.default),
};

export default polyglotI18nProvider(locale => {
    // if (locale === 'en') {
    //     return messages[locale]();
    // }

    // Always fallback on chinese
    return chineseMessages;
}, 'zh');
