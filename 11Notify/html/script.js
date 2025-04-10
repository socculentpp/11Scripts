window.addEventListener('message', function (event) {
    const data = event.data;

    if (data.action === 'notify') {
        const container = document.getElementById('notifications');
        const notify = document.createElement('div');
        notify.className = 'notify';

        // Define icon paths
        const successIcon = 'images/success-icon.png'; // Path for success icon
        const errorIcon = 'images/error-icon.png';     // Path for error icon
        const infoIcon = 'images/info-icon.png';       // Path for info icon

        
        const bottomLine = document.createElement('div');
        bottomLine.className = ''; 

       
        const leftLine = document.createElement('div');
        leftLine.className = ''; 

        
        const icon = document.createElement('img');
        icon.className = 'icon';  

        if (data.type === 'success') {
            icon.src = successIcon;
            notify.appendChild(icon);
            notify.innerHTML += '<span class="notify-text success">' + data.text + '</span>';
            bottomLine.className = 'notify-success-line'; 
            leftLine.className = 'notify-success-left-line'; 
        } else if (data.type === 'error') {
            icon.src = errorIcon;
            notify.appendChild(icon);
            notify.innerHTML += '<span class="notify-text error">' + data.text + '</span>';
            bottomLine.className = 'notify-error-line'; 
            leftLine.className = 'notify-error-left-line'; 
        } else {
            
            icon.src = infoIcon; 
            notify.appendChild(icon);
            notify.innerHTML += '<span class="notify-text default">' + data.text + '</span>';
            bottomLine.className = 'notify-default-line'; 
            leftLine.className = 'notify-default-left-line'; 
        }

        container.appendChild(notify);
        container.appendChild(bottomLine); 
        notify.appendChild(leftLine); 

        
        const sound = document.getElementById('notifSound');
        if (sound) {
            sound.volume = 0.2; 
            sound.currentTime = 0;
            sound.play().catch(err => console.log("Sound error:", err));
        }

        
        setTimeout(() => {
            notify.remove();
            bottomLine.remove(); 
            leftLine.remove(); 
        }, data.duration || 5000); 
    }
});
