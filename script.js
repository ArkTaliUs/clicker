Let button = document.GetElementById('button');
Let h1 = document.GetElementById('h1);
Let count = 0;

Button.addEventListener('click', function() {
        count++;
        h1.textContent = 'Counter: ' + count;
)}
        