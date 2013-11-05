define(['backbone', 'text!templates/user.html', 'text!templates/user_no_edit.html'], function (Backbone, userTemplate, userNoEditTemplate) {
    return Backbone.View.extend({
        tagName: "p",
        template: _.template(userTemplate),
        template_no_edit: _.template(userNoEditTemplate),
        initialize: function (options) {
            this.trigger('view:log', 'Creating UserView');
            if (options && options.no_edit) {
                this.no_edit = options.no_edit;
            }
            // this.listenTo(this.model, 'change', this.render);
            // this.render();
        },
        render: function () {
            this.trigger('view:log', 'Rendering UserView');
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
