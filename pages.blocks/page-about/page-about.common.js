BN.addDecl('page-about', 'page', {
    route: /^\/(about)?$/
}).staticProp({
    init: function () {
        return this.out('About');
    }
});
