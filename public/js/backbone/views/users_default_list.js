define(['backbone'], function (Backbone) {
    return Backbone.View.extend({
        initialize: function () {
            console.log('Creating UsersDefaultList');
        },
        render: function () {
            var ul = document.createElement("ul");
            console.log('Rendering UsersDefaultList');
            this.collection.each(function (user) {
                $('<li><a href="#users/' + encodeURIComponent(user.get('username')) + '">' + user.get('username') + '</a></li>').appendTo(ul);
            });
            this.el.innerHTML = '<ul>' + ul.innerHTML + '</ul>';
            return this;
        }
    });
});
