BN.addDecl('header').blockTemplate(function(ctx) {

    ctx.js(true);

    ctx.content([
        {
            elem: 'inner',
            content: [
                {
                    block: 'logo',
                    mix: { block: 'header', elem: 'logo' }
                },
                {
                    block: 'nav',
                    mix: { block: 'header', elem: 'menu' }
                }
            ]
        }
    ]);

});
