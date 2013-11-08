define(['backbone', 'backbone_files/views/user_view'], function (Backbone, UserView) {
    return Backbone.View.extend({
        initialize: function () {
            console.log('Creating UsersDetailedList');
        },
        render: function () {
            var ul = document.createElement('ul');
            console.log('Rendering UsersDetailedList');
            this.collection.each(function (user) {
                ul.appendChild(new UserView({
                    model: user,
                    no_edit: true
                }).render().el);
            });
            this.el.innerHTML = ul.innerHTML;
            return this;
        }
    });
});
