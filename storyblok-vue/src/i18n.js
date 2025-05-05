import { createI18n } from 'vue-i18n'

const messages = {
    'de-at': {
        nav: {
            home: 'Startseite',
            events: 'Über uns',
            contact: 'Kontakt'
        },
        moreInfo: 'Mehr erfahren',
        date: 'Datum'
    },
    'en': {
        nav: {
            home: 'Home',
            events: 'About',
            contact: 'Contact'
        },
        moreInfo: 'More info',
        date: 'Date'
    }
}

const i18n = createI18n({
    legacy: false,
    locale: 'de-at',
    fallbackLocale: 'en',
    messages
})


export default i18n
