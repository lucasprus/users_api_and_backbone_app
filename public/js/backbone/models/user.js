define(['backbone'], function (Backbone) {
    return Backbone.Model.extend({
        initialize: function () {
            console.log('Creating User');
        },
        urlRoot: '/users',
        idAttribute: 'username'
    });
});
