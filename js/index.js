function searchInput() {

    fetch("https://api.github.com/user")
        .then(response => response.json())
        .then(data => {
            const users = data.items;

            users.forEach(user => {
                const userItem = document.createElement('li');
                userItem.innerHTML = '';
                userList.appendChild(userItem);
            });
        })
        .catch(error => {
            console.error('Error', error);
        });
}

const gitForm = document.getElementById('github-form');
gitForm.addEventListener('submit, function (event) 
    const searchInput1 = document.getElementById('search');
    const query = searchInput1.value.time();

if (query !== '') {
    searchInput1(query);
});