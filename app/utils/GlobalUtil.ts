export default class GlobalUtil {

    static setToLocalStorage(key: string, value: any) {
        if (value) {
            window.localStorage.setItem(key, JSON.stringify(value))
        }
    }
    
    static getFromLocalStorage(key: string) {
        return window.localStorage.getItem(key);

    }
}