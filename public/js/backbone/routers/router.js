define([
        'backbone_files/models/user',
        'backbone_files/collections/users',
        'backbone_files/views/user_view',
        'backbone_files/views/user_edit_view',
        'backbone_files/views/user_new_view',
        'backbone_files/views/users_view'
    ],
    function (User, Users, UserView, UserEditView, UserNewView, UsersView) {
        return Backbone.Router.extend({
            initialize: function (options) {
                var _this = this;
                console.log('Creating Router');
                console.info('We\'re in app!');
                this.El = document.getElementById('container');
                this.saveUser = function (attributes) {
                    console.log('Saving user');
                    _this.user.save(attributes, {
                        success: function () {
                            console.info('Successfully saved user');
                            _this.navigate('users/' + _this.user.get('username'), {
                                trigger: true
                            });
                            _this.userView.render();
                        },
                        error: function (model, xhr) {
                            console.error('Failed to save user');
                            var error = Backbone.$.parseJSON(xhr.responseText);
                            // console.log(error.error.message);
                            alert(error.error.message);
                        },
                        wait: true
                    });
                };
                this.deleteUser = function (attributes) {
                    console.log('Deleting user');
                    _this.user.destroy({
                        success: function () {
                            console.info('Successfully deleted user');
                            _this.navigate('users', {
                                trigger: true
                            });
                        },
                        error: function (model, xhr) {
                            console.error('Failed to save user');
                            var error = Backbone.$.parseJSON(xhr.responseText);
                            // console.log(error.error);
                            alert(error.error.message);
                        },
                        wait: true
                    });
                };
                this.user = new User();
                this.userView = new UserView({
                    model: this.user,
                    el: this.El
                });
                this.userEditView = new UserEditView({
                    model: this.user,
                    el: this.El
                });
                this.userNewView = new UserNewView({
                    el: this.El
                });
                this.users = new Users();
                this.usersView = new UsersView({
                    collection: this.users,
                    el: this.El
                });
                if (options && options.log === true) {
                    // Listen on logging events triggered in views, model and collection
                    this.listenTo(this.userView, 'view:log', console.log);
                    this.listenTo(this.userEditView, 'view:log', console.log);
                    this.listenTo(this.userNewView, 'view:log', console.log);
                    this.listenTo(this.usersView, 'view:log', console.log);
                    this.listenTo(this.user, 'model:log', console.log);
                    this.listenTo(this.users, 'collection:log', console.log);
                }
                // Handle behaviour in views
                this.listenTo(this.userView, 'user_view:click:button.edit', function () {
                    this.userEditView.render();
                });
                this.listenTo(this.userView, 'user_view:click:button.delete', function () {
                    this.deleteUser();
                });
                this.listenTo(this.userEditView, 'user_edit_view:click:button.save', function (obj) {
                    this.saveUser(obj);
                });
                this.listenTo(this.userEditView, 'user_edit_view:click:button.cancel', function () {
                    this.userView.render();
                });
                this.listenTo(this.userNewView, 'user_new_view:click:button.save_new', function (obj) {
                    this.saveUser(obj);
                });
                this.listenTo(this.userNewView, 'user_new_view:click:button.cancel_new', function () {
                    this.navigate('users', {
                        trigger: true
                    });
                });
            },
            routes: {
                'users/new': 'newUser',
                'users(/page:page)': 'usersIndex',
                'users/:username': 'userProfile'
            },
            newUser: function () {
                this.userNewView.render();
                this.user.clear({
                    'silent': true
                });
            },
            userProfile: function (username) {
                var _this = this;
                this.user.set({
                    username: username
                }, {
                    silent: true
                });
                this.user.fetch({
                    success: function () {
                        console.info('Successfully fetched user');
                        _this.userView.render();
                    },
                    error: function () {
                        console.error('Failed to fetch user');
                    }
                });
            },
            usersIndex: function (page) {
                this.users.page = (page && parseInt(page, 10)) || 0;
                var _this = this;
                this.users.fetch({
                    success: function (users) {
                        console.info('Successfully fetched users');
                        _this.usersView.render();
                    },
                    error: function () {
                        console.error('Failed to fetch users');
                    }
                });
            }
        });
    });
