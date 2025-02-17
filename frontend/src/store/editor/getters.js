import { LocalStorage } from "quasar";
import { CONTENT_LAST_SAVE_CACHE_KEY } from "src/config";

export function isChanged (state) {
    const cachedContentHTML = LocalStorage.getItem(CONTENT_LAST_SAVE_CACHE_KEY)
    return (
        state.lastChagne !== state.lastSave &&
        state.contentHTML !== cachedContentHTML
    )
}
