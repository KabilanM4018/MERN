document.addEventListener('DOMContentLoaded', function() {
    // Sample chat data
    const chats = [
        {
            id: 1,
            name: 'John Doe',
            lastMessage: 'Hey, how are you?',
            time: '10:30 AM',
            unread: 2,
            avatar: 'https://via.placeholder.com/40',
            messages: [
                { text: 'Hey there!', time: '10:20 AM', sent: false },
                { text: 'How are you doing?', time: '10:21 AM', sent: false },
                { text: "I'm good, thanks!", time: '10:25 AM', sent: true },
                { text: 'Hey, how are you?', time: '10:30 AM', sent: false }
            ]
        },
        {
            id: 2,
            name: 'Jane Smith',
            lastMessage: 'Meeting at 3 PM',
            time: '9:15 AM',
            unread: 0,
            avatar: 'https://via.placeholder.com/40/ff0000',
            messages: [
                { text: 'Hi Jane!', time: '9:00 AM', sent: true },
                { text: 'About the project...', time: '9:05 AM', sent: true },
                { text: 'Meeting at 3 PM', time: '9:15 AM', sent: false }
            ]
        },
        {
            id: 3,
            name: 'Work Group',
            lastMessage: 'Alice: I sent the files',
            time: 'Yesterday',
            unread: 5,
            avatar: 'https://via.placeholder.com/40/00ff00',
            messages: [
                { text: 'Bob: Has everyone reviewed the proposal?', time: 'Yesterday, 4:30 PM', sent: false },
                { text: 'Yes, looks good', time: 'Yesterday, 4:45 PM', sent: true },
                { text: 'Alice: I sent the files', time: 'Yesterday, 5:00 PM', sent: false }
            ]
        }
    ];

    const chatList = document.querySelector('.chat-list');
    const chatMessages = document.querySelector('.chat-messages');
    const chatHeader = document.querySelector('.chat-info');
    const messageInput = document.querySelector('.message-input input');
    const welcomeScreen = document.querySelector('.welcome-screen');

    // Render chat list
    function renderChatList() {
        chatList.innerHTML = '';
        chats.forEach(chat => {
            const chatItem = document.createElement('div');
            chatItem.className = 'chat-item';
            chatItem.dataset.id = chat.id;
            
            chatItem.innerHTML = `
                <img src="${chat.avatar}" alt="${chat.name}" class="profile-pic">
                <div class="chat-info">
                    <h3>${chat.name}</h3>
                    <p>${chat.lastMessage}</p>
                </div>
                <div class="chat-time">${chat.time}</div>
            `;
            
            chatItem.addEventListener('click', () => loadChat(chat.id));
            chatList.appendChild(chatItem);
        });
    }

    // Load chat messages
    function loadChat(chatId) {
        const chat = chats.find(c => c.id == chatId);
        if (!chat) return;
        
        welcomeScreen.style.display = 'none';
        chatMessages.innerHTML = '';
        
        // Update chat header
        chatHeader.innerHTML = `
            <img src="${chat.avatar}" alt="${chat.name}" class="profile-pic">
            <div>
                <h3>${chat.name}</h3>
                <p>online</p>
            </div>
        `;
        
        // Render messages
        chat.messages.forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.className = `message ${message.sent ? 'sent' : 'received'}`;
            messageElement.innerHTML = `
                <p>${message.text}</p>
                <div class="message-time">${message.time}</div>
            `;
            chatMessages.appendChild(messageElement);
        });
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Send message
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value.trim() !== '') {
            const activeChatId = document.querySelector('.chat-item.active')?.dataset.id;
            if (!activeChatId) return;
            
            const chat = chats.find(c => c.id == activeChatId);
            if (!chat) return;
            
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            // Add message to chat
            const newMessage = {
                text: this.value.trim(),
                time: timeString,
                sent: true
            };
            
            chat.messages.push(newMessage);
            chat.lastMessage = this.value.trim();
            chat.time = timeString;
            
            // Render the new message
            const messageElement = document.createElement('div');
            messageElement.className = 'message sent';
            messageElement.innerHTML = `
                <p>${newMessage.text}</p>
                <div class="message-time">${newMessage.time}</div>
            `;
            chatMessages.appendChild(messageElement);
            
            // Clear input and scroll to bottom
            this.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // Update chat list
            renderChatList();
        }
    });

    // Initialize
    renderChatList();
});