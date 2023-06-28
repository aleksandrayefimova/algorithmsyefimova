function hanoiIterative(n, from, to, aux) {
  // Создаем стек для хранения состояний перемещения дисков
  let stack = [];

  // Создаем объект, представляющий состояние перемещения дисков
  let state = {
    n: n,
    from: from,
    to: to,
    aux: aux,
    action: 'initial'
  };

  // Помещаем начальное состояние в стек
  stack.push(state);

  while (stack.length > 0) {
    let currentState = stack[stack.length - 1];

    if (currentState.action === 'done') {
      stack.pop();
    } else if (currentState.action === 'initial') {
      if (currentState.n === 1) {
        console.log(`Перемещаем диск с ${currentState.from} на ${currentState.to}`);
        currentState.action = 'done';
      } else {
        currentState.action = 'move';
        stack.push({
          n: currentState.n - 1,
          from: currentState.from,
          to: currentState.aux,
          aux: currentState.to,
          action: 'initial'
        });
      }
    } else if (currentState.action === 'move') {
      console.log(`Перемещаем диск с ${currentState.from} на ${currentState.to}`);
      currentState.action = 'done';
      stack.push({
        n: currentState.n - 1,
        from: currentState.aux,
        to: currentState.to,
        aux: currentState.from,
        action: 'initial'
      });
    }
  }
}

// Пример вызова итеративного решения
hanoiIterative(3, 'левый', 'правый', 'средний');


function hanoiRecursive(n, from, to, aux) {
  if (n === 1) {
    console.log(`Перемещаем диск с ${from} на ${to}`);
  } else {
    hanoiRecursive(n - 1, from, aux, to);
    console.log(`Перемещаем диск с ${from} на ${to}`);
    hanoiRecursive(n - 1, aux, to, from);
  }
}

// Пример вызова рекурсивного решения
hanoiRecursive(3, 'левый', 'правый', 'средний');
