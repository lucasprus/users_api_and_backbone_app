define(['backbone'], function (Backbone) {
    return Backbone.Model.extend({
        initialize: function () {
            this.trigger('model:log', 'Creating User');
        },
        urlRoot: '/users',
        idAttribute: 'username'
    });
});
