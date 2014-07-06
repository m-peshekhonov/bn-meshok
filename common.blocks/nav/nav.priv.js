BN.addDecl('nav').blockTemplate(function(ctx) {

    ctx.js(true);

    ctx.tag('ul');

    ctx.content([
        {
            elem: 'inner',
            content: [
                {
                    elem: 'item',
                    url: '/',
                    content: 'Главная'
                },
                {
                    elem: 'item',
                    url: '/feed',
                    content: 'Новости'
                },
                {
                    elem: 'item',
                    url: '/about',
                    content: 'О сайте'
                }
            ]
        }
    ]);

}).elemTemplate({

    'item': function(ctx) {
        var json = ctx.json();

        ctx.tag('li')
            .content({
                block: 'link',
                url: json.url,
                target: json.target,
                content: ctx.content()
            }, true);
    }

});
