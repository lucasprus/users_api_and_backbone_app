define(['backbone', '../models/user'], function (Backbone) {
    return Backbone.View.extend({
        tagName: "p",
        template: _.template('<span>Username: <%= username %></span><br /><span>Name: <%= name %></span><br /><span>Email: <%= email %></span><br /><span>Password: <%= password %></span><br /><span>Birthday: <%= new Date(birthday).toLocaleDateString() %></span><br /><span>Gender: <%= gender %></span><br /><span>Bio: <%= bio %></span><br /><button class="edit">Edit</button><button class="delete">Delete</button>'),
        template_no_edit: _.template('<span>Username: <%= username %></span><br /><span>Name: <%= name %></span><br /><span>Email: <%= email %></span><br /><span>Password: <%= password %></span><br /><span>Birthday: <%= new Date(birthday).toLocaleDateString() %></span><br /><span>Gender: <%= gender %></span><br /><span>Bio: <%= bio %></span>'),
        initialize: function (options) {
            console.log('Creating UserView');
            if (options && options.no_edit) {
                this.no_edit = options.no_edit;
            }
            // this.listenTo(this.model, 'change', this.render);
            // this.render();
        },
        render: function () {
            console.log('Rendering UserView');
            if (this.no_edit) {
                this.$el.html(this.template_no_edit(this.model.attributes));
            } else {
                this.$el.html(this.template(this.model.attributes));
            }
            return this;
        },
        edit: function () {
            app.userEditView.render();
        },
        delete_user: function () {
            app.deleteUser();
        },
        events: {
            "click button.edit": "edit",
            "click button.delete": "delete_user"
        }
    });
});
