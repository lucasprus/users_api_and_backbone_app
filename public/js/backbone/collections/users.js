define(['backbone', '../models/user'], function (Backbone, User) {
    return Backbone.Collection.extend({
        model: User,
        initialize: function (models, options) {
            console.log('Creating Users');
        },
        url: function () {
            return '/users?page=' + (this.page || 1);
        },
        parse: function (response) {
            this.count = response.count;
            this.maxUsersPerPage = response.maxUsersPerPage;
            this.lastPage = this.page * this.maxUsersPerPage >= this.count;
            return response.users;
        }
    });
});
