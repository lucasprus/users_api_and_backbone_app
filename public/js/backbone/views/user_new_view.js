define(['backbone', 'jquery-ui', 'text!templates/user_new.html'], function (Backbone, jqueryUI, userNewTemplate) {
    return Backbone.View.extend({
        template: _.template(userNewTemplate),
        initialize: function () {
            this.trigger('view:log', 'Creating UserNewView');
            // this.render();
        },
        render: function () {
            this.trigger('view:log', 'Rendering UserNewView');
            this.$el.html(this.template());
            jQuery("#datepicker").datepicker({
                changeMonth: true,
                changeYear: true,
                yearRange: "-100:-18"
            });
            return this;
        },
        save: function () {
            var form = this.el.getElementsByTagName('form')[0];
            app.saveUser({
                username: form.username.value,
                name: form.name.value,
                email: form.email.value,
                password: form.password.value,
                birthday: form.birthday.value,
                gender: form.gender[1].checked ? 'F' : 'M',
                bio: form.bio.value
            });
        },
        cancel: function () {
            app.navigate('users', {
                trigger: true
            });
        },
        events: {
            'click button.save_new': 'save',
            'click button.cancel_new': 'cancel'
        }
    });
});
