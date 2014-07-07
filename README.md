##bem-node project stub


### Установка

    $ git clone https://github.com/m-peshekhonov/bn-meshok.git project-name
    $ cd project-name
    $ make

### Запуск

    $ npm start или 'node app/example/example.server.js --socket 3000'

Страница доступна по адресу http://127.0.0.1:3000/ или localhost:3000

### Пересборка
При добавлении новых файлов `deps.js` или `bemdecl.js`

    $ make rebuild

### Структура проекта

  - `common.blocks` — общие блоки проекта. Например: header, footer, menu, sidebar и т.п.
  - `helpers.blocks` — абстрактные блоки-хэлперы
  - `lib.blocks` — библиотека блоков. Например: link, input, button и т.п.
  - `pages.blocks` — страницы-блоки проекта

  Так же в `.bem/enb-make.js` закоментированно `data-blocks` — блоки предназначенные для API проекта

### Блоки-хэлперы
В данной сборке есть пару полезных методов в блоке `i-global`

	BN('i-global').timeAgo('1327611110417', true) 
	// Выводит время в красивом формате. Второй параметр boolean - слово "Назад".
	// Результат строка: '43 мин. назад' или '43 мин'.

	BN('i-global').declination('Фотографий', 'Фотография', 'Фотографии', 15)
	// Cклоняет слова. Последним параметром число, относительно которого нужно склонять.
	// Результат строка: 'Фотографий'

### Докуменатция

https://github.com/wtfil/bem-node/blob/master/README.md
