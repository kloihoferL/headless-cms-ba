import { createI18n } from 'vue-i18n'

const messages = {
    'de-AT': {
        nav: {
            home: 'Startseite',
            events: 'Über uns',
            contact: 'Kontakt'
        },
        moreInfo: 'Mehr erfahren',
        date: 'Datum'
    },
    'en-US': {
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
    locale: 'de-AT',
    fallbackLocale: 'en-US',
    messages
})


export default i18n
