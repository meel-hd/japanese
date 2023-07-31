import translations from './translations.json'

function useLocalization(){
    const lang = localStorage.getItem('lang') || 'en'

    function translate(key: string):string {
        if(!translations[lang][key]){
            return key
        }
        else{
            return translations[lang][key]
        }
    }

    return {translate, lang}
}
export default useLocalization;