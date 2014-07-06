BN.addDecl('static-text').blockTemplate(function(ctx) {

    ctx.js(true);

    ctx.content([
        {
            elem: 'title',
            content: 'Установка'
        },
        {
            elem: 'text',
            content: [
                {
                    elem: 'item',
                    content: 'git clone https://github.com/m-peshekhonov/bn-meshok project-name'
                },
                {
                    elem: 'item',
                    content: 'cd project-name'
                },
                {
                    elem: 'item',
                    content: 'make'
                }
            ]
        },
        {
            elem: 'title',
            content: 'Запуск'
        },
        {
            elem: 'text',
            content: [
                {
                    elem: 'item',
                    content: "npm start или 'node app/example/example.server.js --socket 3000'"
                }
            ]
        },
        {
            elem: 'title',
            content: 'Сборка'
        },
        {
            elem: 'text',
            content: [
                {
                    elem: 'item',
                    content: "make rebuild"
                }
            ]
        }
    ]);

});
