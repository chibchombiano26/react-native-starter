import * as actions from '../const';

export const sayHelloAction = name => ({
  type: actions.HELLO,
  value: name,
});

export const doSayHelloAction = name => distpach => distpach(sayHelloAction(name));
