define(['backbone', 'jquery-ui'], function (Backbone) {
    return Backbone.View.extend({
        template: _.template('<form><table><tr><td><label for="username">Username:</label></td><td><input type="text" name="username"/></td></tr><tr><td><label for="name">Name:</label></td><td><input type="text" name="name"/></td></tr><tr><td><label for="email">Email:</label></td><td><input type="text" name="email"/></td></tr><tr><td><label for="password">Password:</label></td><td><input type="text" name="password"/></td></tr><tr><td><label for="birthday">Birthday:</label></td><td><input type="text" id="datepicker" name="birthday"/></td></tr><tr><td><label>Gender:</label></td><td>Male:<input type="radio" name="gender" value="M" checked="checked"/>Female:<input type="radio" name="gender" value="F"/></td></tr><tr><td><label for="bio">Bio:</label></td><td><textarea name="bio"></textarea></td></tr></table></form><button class="save_new" type="button">Save</button><button class="cancel_new" type="button">Cancel</button>'),
        initialize: function () {
            console.log('Creating UserNewView');
            // this.render();
        },
        render: function () {
            console.log('Rendering UserNewView');
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
