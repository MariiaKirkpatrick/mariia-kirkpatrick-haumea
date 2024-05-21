fetch('https://api.github.com/users/mariiakirkpatrick/repos')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(repositories => {
    console.log(repositories);
})
.catch(error => {
    console.error('Error fetching data:', error);
});