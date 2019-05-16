import enLocale from './en' //英文
import zhCNLocale from './zh-CN' //简体中文
import ruRULocale from './ru-RU' //俄语
import esLocale from './es' //俄语
const messages = {
    'en': {
        ...enLocale,
    },
    'zh-CN': {
        ...zhCNLocale,
    },
    'ru-RU': {
    	...ruRULocale,
    },
    'es': {
    	...esLocale,
    }
}
export default messages