axios.get('https://api.github.com/users/xande098')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.warn(error);
    });
