define(['backbone', 'backbone_files/views/user_view'], function (Backbone, UserView) {
    return Backbone.View.extend({
        initialize: function () {
            console.log('Creating UsersView');
            // this.listenTo(this.collection, "change", this.render);
            // this.listenTo(this.collection, "add", this.render);
            // this.render();
        },
        render: function () {
            var ul = document.createElement("ul");
            console.log('Rendering UsersView');
            this.collection.each(function (user) {
                $('<li><a href="#users/' + encodeURIComponent(user.get('username')) + '">' + user.get('username') + '</a></li>').appendTo(ul);
            });
            this.el.innerHTML = '<ul>' + ul.innerHTML + '</ul>';
            this.renderPagination();
            return this;
        },
        renderDetailView: function () {
            var _thisEl = this.el;
            console.log('Rendering detailed UsersView');
            this.el.innerHTML = '';
            this.collection.each(function (user) {
                _thisEl.appendChild(new UserView({
                    model: user,
                    no_edit: true
                }).render().el);
            });
            this.renderPagination();
            return this;
        },
        renderPagination: function () {
            var i,
                j,
                txt = '',
                count = this.collection.count,
                maxUsersPerPage = this.collection.maxUsersPerPage,
                page = this.collection.page;
            if (page > 1) {
                txt += '<a href="#users/page' + (page - 1) + '">Previous</a>&nbsp;';
            }
            for (i = 0, j = 1; i < count; i += maxUsersPerPage, j += 1) {
                txt += '&nbsp;<a  href="#users/page' + j + '">' + j + '</a>&nbsp;';
            }
            if (!this.collection.lastPage) {
                txt += '&nbsp;<a  href="#users/page' + (page + 1) + '">Next</a>';
            }
            this.el.innerHTML += txt;
        }
    });
});
