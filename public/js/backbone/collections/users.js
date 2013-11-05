define(['backbone', '../models/user'], function (Backbone, User) {
    return Backbone.Collection.extend({
        model: User,
        initialize: function (models, options) {
            this.trigger('collection:log', 'Creating Users');
        },
        url: function () {
            var page = this.page || 0;
            return '/users?page=' + page;
        },
        parse: function (response) {
            this.lastPage = response.lastPage;
            return response.users;
        }
    });
});
