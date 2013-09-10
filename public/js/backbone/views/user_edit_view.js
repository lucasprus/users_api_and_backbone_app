define(['backbone', 'jquery-ui'], function (Backbone) {
    return Backbone.View.extend({
        template: _.template('<form><table><tr><td><label for="name">Name:</label></td><td><input type="text" name="name" value="<%=name %>"/></td></tr><tr><td><label for="email">Email:</label></td><td><input type="text" name="email" value="<%=email %>"/></td></tr><tr><td><label for="password">Password:</label></td><td><input type="text" name="password" value="<%=password %>"/></td></tr><tr><td><label for="birthday">Birthday:</label></td><td><input type="text" id="datepicker" name="birthday" value="<%=new Date(birthday).toLocaleDateString()  %>"/></td></tr><tr><td><label>Gender:</label></td><td>Male:<input type="radio" name="gender" <% if(gender==="M"){%> checked="checked" <%}%> value="M"/>Female:<input type="radio" name="gender" <% if(gender==="F"){%> checked="checked" <%}%> value="F"/></td></tr><tr><td><label for="bio">Bio:</label></td><td><textarea name="bio"><%=bio %></textarea></td></tr><tr><td></td><td></td></tr></table></form><button class="save" type="button">Save</button><button class="cancel" type="button">Cancel</button>'),
        initialize: function () {
            console.log('Creating UserEditView');
            // this.render();
            // this.listenTo(this.model, "change", this.render);
        },
        render: function () {
            console.log('Rendering UserEditView');
            this.$el.html(this.template(this.model.attributes));
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
                name: form.name.value,
                email: form.email.value,
                password: form.password.value,
                birthday: form.birthday.value,
                gender: form.gender[0].checked ? 'M' : 'F',
                bio: form.bio.value
            });
        },
        cancel: function () {
            app.userView.render();
        },
        events: {
            'click button.save': 'save',
            'click button.cancel': 'cancel'
        }
    });
});
