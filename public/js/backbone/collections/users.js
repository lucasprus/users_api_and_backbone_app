define(['backbone', '../models/user'], function (Backbone, User) {
    return Backbone.Collection.extend({
        model: User,
        initialize: function (models, options) {
            console.log('Creating Users');
            // this.page = (options && options.page && parseInt(options.page, 10)) || 0;
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
