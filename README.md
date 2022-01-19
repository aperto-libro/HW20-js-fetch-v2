# HW20-js-fetch-v2

1. Создайте на вашем github репозиторий по следующему шаблону HW#-name. Все результаты нужно запушить в ваш репозиторий и прикрепить ссылку на hillel портале.

2. Создайте index.html в котором подключите js script.

3. Создайте README.md с описанием задания.

4. Подготовка

- Ознакомьтесь с документацией:

  :black_square_button: https://jsonplaceholder.typicode.com/

  :black_square_button: https://jsonplaceholder.typicode.com/guide/

5. Задание:

Использовать fetch с async await для получения данных. Для организации кода используйте js class.

:black_square_button: При загрузке страницы нужно вывести информацию по первому посту (из коллекции posts) и все комментарии которые относятся к данному посту.

:black_square_button: Для отображении информации используйте макет.

![Макет поста](img/form.jpg 'Так должна выглядеть пост')

:black_square_button: ** Опциональное задание**. Реализовать возможность добавлять комментарии к данному посту.

6. Опциональное задание. Следующий код выводит логи в следующей последовательности 1 5 4 3 2. Необходимо поправить код таким образом чтобы выводил результат в следующей последовательности 1 5 3 4 2.

```
console.log(1);

setTimeout(function () {
console.log(2);
}, 100);

setTimeout(function () {
console.log(3);
}, 0);

new Promise(function (resolve) {
resolve();
}).then(() => {
console.log(4);
});

console.log(5);
```
