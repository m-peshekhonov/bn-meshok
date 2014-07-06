BN.addDecl('some-block').blockTemplate(function(ctx) {

    ctx.js(true);

    ctx.content([
        {
            elem: 'text',
            content: 'content some-block'
        }
    ]);

});
