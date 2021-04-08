import { ICounter } from "../auth/account/state/counter.interface";
import { ILanguage } from "./state/language.interface";

export interface AppState {
  counter: ICounter;
  app: ILanguage;
}

// export const State: AppState = {
//     counter: counterReducer(),
//     app: languageReducer,
// }