const i18next = require('i18next');
const XHR = require('i18next-xhr-backend');
const LanguageDetector = require('i18next-browser-languagedetector');
const cookieParser = require('cookie-parser');
const i18nextConfig = require('./config');
// Configuration options
// https://www.i18next.com/configuration-options.html

const options = {
    fallbackLng: i18nextConfig.fallbackLng,
    load: i18nextConfig.load,

    // have a common namespace used around the full app
    ns: i18nextConfig.ns,
    defaultNS: i18nextConfig.defaultNS,

    // setting cookie
    detection: {
        lookupCookie: 'i18next',
        lookupSession: 'i18next',
        caches: ['cookie']
    },

    debug: i18nextConfig.debug,
    saveMissing: i18nextConfig.saveMissing,
    lowerCaseLng: i18nextConfig.lowerCaseLng,
    backend: i18nextConfig.backend
};

const i18nInstance = i18next;

// for browser use xhr backend to load translations and browser lng detector
if (process.browser) {
    i18nInstance
        .use(XHR)
        // .use(Cache)
        .use(LanguageDetector);
}


// initialize if not already initialized
if (!i18nInstance.isInitialized) i18nInstance.init(options);


// a simple helper to getInitialProps passed on loaded i18n data
const getInitialProps = (req, namespaces) => {
    if (!namespaces) namespaces = i18nInstance.options.defaultNS;
    if (typeof namespaces === 'string') namespaces = [namespaces];

    req.i18n.toJSON = () => null; // do not serialize i18next instance and send to client

    const initialI18nStore = {};
    req.i18n.languages.forEach((l) => {
        initialI18nStore[l] = {};
        namespaces.forEach((ns) => {
            initialI18nStore[l][ns] = (req.i18n.services.resourceStore.data[l] || {})[ns] || {};
        });
    });

    return {
        i18n: req.i18n, // use the instance on req - fixed language on request (avoid issues in race conditions with lngs of different users)
        initialI18nStore,
        initialLanguage: req.i18n.language
    };
};

module.exports = {
    getInitialProps,
    i18nInstance,
    i18n: i18next.default
};
