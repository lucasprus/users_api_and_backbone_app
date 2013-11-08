define(['backbone'], function (Backbone) {
    return Backbone.View.extend({
        initialize: function () {
            console.log('Creating UsersPagination');
        },
        render: function () {
            console.log('Rendering UsersPagination');
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
            this.el.innerHTML = txt;
            return this;
        }
    });
});
