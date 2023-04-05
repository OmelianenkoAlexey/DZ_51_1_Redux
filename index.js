// store {}, reduser(state, action), action (type: ', payload), action type
// store (магазин), reduser (редуктор), action (действие), payload (полезная нагрузка)
// добавить "type": "module", в файл package.json

import redux from 'redux';
console.log(redux);

// ! action type это стандартные переменные
const COUNT_ACTION_INC = 'COUNT_ACTION_INC';
const COUNT_ACTION_DEC = 'COUNT_ACTION_DEC';
const COUNT_ACTION_SET = 'COUNT_ACTION_SET';

// action creator это переменные котрые нам возвращают type и payload

const inc = () => ({ type: COUNT_ACTION_INC });
const dec = () => ({ type: COUNT_ACTION_DEC });
const set = () => ({ type: COUNT_ACTION_SET, payload: 10 });

// начальное состояние
// ! создается только один раз на все приложение
const initialStore = {
    count: 0,
    // todos: [],
};

// создаем наш store
// ! создается только один раз на все приложение
const store = redux.createStore(reducer, initialStore);

// reducer это функция которая принимает состояние (state) и экшен (action)
// ! способ 1
// function reducer(state, action) {
//     // console.log(action);
//         if (action.type === 'COUNT_ACTION_INC') {
//         return { ...state, count: state.count + 1 }
//     } 
//     if (action.type === 'COUNT_ACTION_DEC') {
//         return { ...state, count: state.count - 1 }
//     }
//     return state;
// }

// ! способ 2 вот так правильно!!!
function reducer(state, { type, payload }) {
    // console.log(type); // COUNT_ACTION_INC
    switch (type) {
        case COUNT_ACTION_INC:
            return { ...state, count: state.count + 1 };
        case COUNT_ACTION_DEC:
            return { ...state, count: state.count - 1 };
        case COUNT_ACTION_SET:
            return { ...state, count: payload };
        default:
            return state;
    }
}

console.log(store.getState()); // { count: 0 }

// ! action
// const COUNT_ACTION_INC = { type: 'COUNT_ACTION_INC' };

// ! dispatch
// dispatch принимает в себя action
// ! store.dispatch можно вызвать (достучаться) с любого файла!!!

// ! incremen (приращение)
// store.dispatch({ type: COUNT_ACTION_INC });
store.dispatch(inc());
console.log(store.getState()); // { count: 1 }

// можно так достать переменную
const { count } = store.getState();
console.log(count); // 1

// ! decrement (уменьшение)
// store.dispatch({ type: COUNT_ACTION_DEC });
store.dispatch(dec());
console.log(store.getState()); // { count: 0 }

// store.dispatch({ type: COUNT_ACTION_SET, payload: 10 });
store.dispatch(set());
console.log(store.getState()); // { count: 10 }