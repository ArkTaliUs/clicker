Let button = document.GetElementById('buttonId');
Let h1 = document.GetElementById('h1');
Let count = 0;

ButtonId.addEventListener('click', function() {
        count++;
        h1.textContent = 'Count: ' + count;
})
        
