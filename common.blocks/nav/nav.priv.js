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
                    content: 'main'
                },
                {
                    elem: 'item',
                    url: '/feed',
                    content: 'feed'
                },
                {
                    elem: 'item',
                    url: '/about',
                    content: 'about'
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
