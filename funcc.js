const button = document.querySelector('.btn');

button.addEventListener('click', () => {
 
    fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=24')
        .then(response => {
      
            if (!response.ok) {
                throw new Error('Сеть ответила с ошибкой: ' + response.status);
            }
            return response.json(); // 
        })
        .then(data => {
            const container = document.querySelector('.posts-container'); 
            container.innerHTML = ''; 
            data.forEach(item => {
                const img = document.createElement('img');
                img.src = item.url; 
                img.alt = item.title;
                container.appendChild(img); 
            });
        })
        .catch(error => {
            console.error('Ошибка:', error); 
        });
});
