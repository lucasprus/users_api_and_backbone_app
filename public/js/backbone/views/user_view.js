define(['backbone', 'jquery-ui', 'text!templates/user.html', 'text!templates/user_no_edit.html'], function (Backbone, jqueryUI, userTemplate, userNoEditTemplate) {
    return Backbone.View.extend({
        tagName: "p",
        template: _.template(userTemplate),
        template_no_edit: _.template(userNoEditTemplate),
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
        events: {
            "click button.edit": function () {
                this.trigger('user_view:click:button.edit');
            },
            "click button.delete": function () {
                this.trigger('user_view:click:button.delete');
            }
        }
    });
});
