define(['backbone', './users_default_list', './users_detailed_list', './users_pagination', './users_view_switch', 'helpers/cookie'], function (Backbone, UsersDefaultList, UsersDetailedList, UsersPagination, UsersViewSwitch, cookieHelper) {
    return Backbone.View.extend({
        initialize: function () {
            console.log('Creating UsersView');
            // this.listenTo(this.collection, "change", this.render);
            // this.listenTo(this.collection, "add", this.render);
            // this.render();
            // console.info(cookieHelper.getItem('view'));
            this.usersDefaultList = new UsersDefaultList({
                collection: this.collection
            });
            this.usersDetailedList = new UsersDetailedList({
                collection: this.collection,
                el: this.usersDefaultList.el
            });
            this.usersPagination = new UsersPagination({
                collection: this.collection
            });
            this.usersViewSwitch = new UsersViewSwitch();
        },
        render: function () {
            console.log('Rendering UsersView');
            this.el.innerHTML = '';
            var doc = document.createDocumentFragment();
            doc.appendChild(this.usersViewSwitch.render().el);
            if (cookieHelper.getItem('view') === 'detailed') {
                doc.appendChild(this.usersDetailedList.render().el);
            } else {
                doc.appendChild(this.usersDefaultList.render().el);
            }
            doc.appendChild(this.usersPagination.render().el);
            this.el.appendChild(doc);
            return this;
        },
        events: {
            'change #view_switch :radio': function (event) {
                var v = event.target.value;
                cookieHelper.setItem('view', v, 150);
                if (v === 'detailed') {
                    this.usersDetailedList.render();
                } else {
                    this.usersDefaultList.render();
                }
            }
        }
    });
});
