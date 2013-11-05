$(function () {
    var user = {
        username: 'lucasprus2',
        name: 'Lucas Prus',
        email: 'lucas.prus2@gmail.com',
        password: 'lucasprus',
        bio: 'Lorem Ipsum',
        gender: 'm',
        birthday: '08/27/1983'
    },
        deleteUser = {
            '_method': 'DELETE'
        },
        putUser = {
            name: 'Lucas Prus',
            email: 'lucas.prus2@gmail.com',
            password: 'lucasprus',
            bio: 'Web Developer',
            gender: 'm',
            birthday: '08/27/1983',
            '_method': 'PUT'
        };
    $('button.get').click(function () {
        $.get('http://localhost:3000/users/lucasprus2', function (data, status) {
            console.info('Status: ' + status);
            console.log(data);
        }, 'json');
    });
    $('button.post').click(function () {
        $.post('http://localhost:3000/users', user, function (data, status) {
            console.info('Status: ' + status);
            console.log(data);
        });
    });
    $('button.delete').click(function () {
        $.post('http://localhost:3000/users/lucasprus2', deleteUser, function (data, status) {
            console.info('Status: ' + status);
            console.log(data);
        });
    });
    $('button.put').click(function () {
        $.post('http://localhost:3000/users/lucasprus2', putUser, function (data, status) {
            console.info('Status: ' + status);
            console.log(data);
        });
    });
});
