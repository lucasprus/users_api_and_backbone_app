define(['backbone', 'backbone_files/views/user_view'], function (Backbone, UserView) {
    return Backbone.View.extend({
        initialize: function () {
            this.trigger('view:log', 'Creating UsersView');
            // this.listenTo(this.collection, "change", this.render);
            // this.listenTo(this.collection, "add", this.render);
            // this.render();
        },
        render: function () {
            this.trigger('view:log', 'Rendering UsersView');
            var ul = document.createElement("ul");
            this.collection.each(function (user) {
                $('<li><a href="#users/' + encodeURIComponent(user.get('username')) + '">' + user.get('username') + '</a></li>').appendTo(ul);
            });
            this.el.innerHTML = '<ul>' + ul.innerHTML + '</ul>';
            if (this.collection.page > 0) {
                this.el.innerHTML += '<a href="#users/page' + (this.collection.page - 1) + '">Previous</a>&nbsp;&nbsp;&nbsp;';
            }
            if (!this.collection.lastPage) {
                this.el.innerHTML += '<a  href="#users/page' + (this.collection.page + 1) + '">Next</a>';
            }
            return this;
        },
        renderDetailView: function () {
            this.trigger('view:log', 'Rendering detailed UsersView');
            this.el.innerHTML = '';
            var _thisEl = this.el;
            this.collection.each(function (user) {
                _thisEl.appendChild(new UserView({
                    model: user,
                    no_edit: true
                }).render().el);
            });
            if (this.collection.page > 0) {
                this.el.innerHTML += '<a href="#users/page' + (this.collection.page - 1) + '">Previous</a>&nbsp;&nbsp;&nbsp;';
            }
            if (!this.collection.lastPage) {
                this.el.innerHTML += '<a  href="#users/page' + (this.collection.page + 1) + '">Next</a>';
            }
            return this;
        }
    });
});
