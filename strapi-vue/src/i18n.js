import { createI18n } from 'vue-i18n'

const messages = {
    'de-AT': {
        nav: {
            home: 'Startseite',
            events: 'Über uns',
            contact: 'Kontakt'
        },
        moreInfo: 'Mehr erfahren',
        getBack: 'Zurück zur Übersicht',
        date: 'Datum'
    },
    'en': {
        nav: {
            home: 'Home',
            events: 'About',
            contact: 'Contact'
        },
        moreInfo: 'More info',
        getBack: 'Back to overview',
        date: 'Date'
    }
}

const i18n = createI18n({
    legacy: false,
    locale: 'de-AT',
    fallbackLocale: 'en',
    messages
})

export default i18n
