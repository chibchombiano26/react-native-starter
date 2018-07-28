import * as actions from '../const';

export const doSayHelloAction = (name)  => (distpach) => distpach(sayHelloAction(name));

export const sayHelloAction = (name) =>({
    type: actions.HELLO,
    value: name
})