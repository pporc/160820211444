import {createContext} from "react";

export const ContextApp = createContext();

export const initialState = { messages: [
  {name: 'Самуил', date: '13 октября 2011', msg: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!! '},
  {name: 'Лилия Семёновна', date: '14 октября 2011', msg: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?'},
  {name: 'Лилия Семёновна', date: '14 октября 2011', msg: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'}
]};

export const reducer = (state, action) => {
  switch (action.type) {
    case "newMessage":
      let value = [...state.messages, action.payload];
      return {
        ...state,
        messages: value,
      };
    default:
      return state;
  }
};
