const i18n = require('./i18n');
const langJSON = require('./lang.json');

const keyArray = [
    // valid keys
    "greetings.normal",
    "greetings.programmer",
    "greetings.cool",
    "greetings.reallycool",
    "goodbyes.normal",
    "goodbyes.programmer",
    "goodbyes.cool",
    "goodbyes.reallycool",

    // invalid keys
    "greetings.abnormal",
    "goodbyes.errorful"
];
let lang = "en";
const runTest = function() {
    for ( key of keyArray ) {
        console.log("[%s] %s == %s", lang, key, i18n.get(key, lang));
    }
};

i18n.parse(langJSON);

runTest();
i18n.missTriggersException = true;
runTest();