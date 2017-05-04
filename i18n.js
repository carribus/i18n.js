const I18n = {
    // properties
    defaultLang: 'en',
    missTriggersException: false,
    stringMap: {},
    // methods
    parse: function(strMap) {
        this.stringMap = strMap;
    },
    get: function(key, lan) {
        const lang = lan || this.defaultLang;
        const pathArr = key.split('.');
        let currObj = this.stringMap;
        let result = null;

        if (currObj[lang]) {
            currObj = currObj[lang];
            for (let i = 0, len = pathArr.length; i < len; i++) {
                if (currObj[pathArr[i]]) {
                    currObj = currObj[pathArr[i]];
                } else {
                    currObj = null;
                    if (this.missTriggersException) {
                        const msg = '${key} not found for language [${lang}]';
                        throw msg;
                    }
                    break;
                }
            }
            result = currObj;
        }

        return result;
    }
};

module.exports = I18n;
