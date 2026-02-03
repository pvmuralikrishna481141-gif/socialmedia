import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Send, MoreVertical, Phone, Video, PenTool } from 'lucide-react';
import Sidebar from './Sidebar'; // 1. IMPORT SHARED SIDEBAR
import PostPage from './PostPage'; 

const ChatPage = ({ onLogout, user }) => {
  const navigate = useNavigate();
  const { contactId } = useParams();

  // --- STATE ---
  const initialContactId = contactId ? parseInt(contactId) : 1;
  const [activeContactId, setActiveContactId] = useState(initialContactId);
  const [messageInput, setMessageInput] = useState('');
  const [isPostModalOpen, setIsPostModalOpen] = useState(false); // State for Post Modal

  // Sync state with URL
  useEffect(() => {
    if (contactId) {
      setActiveContactId(parseInt(contactId));
    }
  }, [contactId]);

  const handleContactClick = (id) => {
    setActiveContactId(id);
    navigate(`/chat/${id}`);
  };

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    console.log(`Sent: ${messageInput}`);
    setMessageInput('');
  };

  // --- DUMMY DATA ---
  const contacts = [
    { id: 1, name: "Sarah Williams", lastMsg: "See you tomorrow! 👋", time: "2m", avatar: "SW", online: true },
    { id: 2, name: "Mike Johnson", lastMsg: "Can you send the file?", time: "1h", avatar: "MJ", online: false },
    { id: 3, name: "Tech Insider", lastMsg: "New AI model released...", time: "5h", avatar: "TI", online: true },
    { id: 4, name: "Emily Chen", lastMsg: "The code looks good to merge.", time: "6h", avatar: "EC", online: true },
    { id: 5, name: "David Kim", lastMsg: "Lunch at 1pm?", time: "1d", avatar: "DK", online: false },
    { id: 6, name: "Creative Hub", lastMsg: "New design assets available.", time: "1d", avatar: "CH", online: true },
    { id: 7, name: "Alex Rivera", lastMsg: "Did you catch the game?", time: "2d", avatar: "AR", online: false },
    { id: 8, name: "Project Alpha", lastMsg: "Deadline pushed to Friday.", time: "3d", avatar: "PA", online: true },
    { id: 9, name: "Lisa Wong", lastMsg: "Thanks for the help!", time: "1w", avatar: "LW", online: false },
  ];

  const conversations = {
    1: [ // Sarah
      { id: 1, text: "Hey! Are we still on for the meeting?", sender: "received", time: "10:30 AM" },
      { id: 2, text: "Yes, absolutely. I'm preparing the slides now.", sender: "sent", time: "10:32 AM" },
      { id: 3, text: "Great! See you tomorrow! 👋", sender: "received", time: "10:33 AM" }
    ],
    2: [ // Mike
      { id: 1, text: "Did you finish the financial report?", sender: "received", time: "9:00 AM" },
      { id: 2, text: "Almost, I just need the raw data exports.", sender: "sent", time: "9:15 AM" },
      { id: 3, text: "Can you send the file?", sender: "received", time: "9:20 AM" }
    ],
    // Fallback
    default: [
      { id: 1, text: "Start a new conversation...", sender: "received", time: "Now" }
    ]
  };

  // Helper: Get Active Data
  const activeContact = contacts.find(c => c.id === activeContactId) || contacts[0];
  const activeMessages = conversations[activeContactId] || conversations.default;

  return (
    <div className="chat-page-container">
      
      {/* --- 2. USE SIDEBAR COMPONENT (Fixes Navigation) --- */}
      <Sidebar 
        onLogout={onLogout} 
        user={user} 
        onPostClick={() => setIsPostModalOpen(true)} 
      />

      {/* --- CONTACT LIST --- */}
      <div className="chat-list-section">
        <div className="chat-header">
          <h2>Messages</h2>
          {/* Also opens Post Modal */}
          <PenTool size={20} className="icon-btn" onClick={() => setIsPostModalOpen(true)}/>
        </div>
        <div className="contacts-list">
          {contacts.map(contact => (
            <div 
                key={contact.id} 
                className={`contact-item ${activeContactId === contact.id ? 'active' : ''}`}
                onClick={() => handleContactClick(contact.id)}
            >
              <div className="avatar">{contact.avatar}</div>
              <div className="contact-info">
                <div className="contact-top">
                    <span className="contact-name">{contact.name}</span>
                    <span className="contact-time">{contact.time}</span>
                </div>
                <p className="contact-msg">{contact.lastMsg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- CHAT WINDOW --- */}
      <div className="chat-window-section">
        <div className="chat-window-header">
            <div className="user-details">
                <div className="avatar small">{activeContact?.avatar}</div>
                <div className="user-text">
                    <span className="username">{activeContact?.name}</span>
                    <span className="user-status">
                        {activeContact?.online ? 'Online' : 'Offline'}
                    </span>
                </div>
            </div>
            <div className="chat-actions">
                <Phone size={20} />
                <Video size={20} />
                <MoreVertical size={20} />
            </div>
        </div>

        <div className="messages-area">
            {activeMessages.map((msg) => (
                <div key={msg.id} className={`msg ${msg.sender}`}>
                    <p>{msg.text}</p>
                    <span className="time">{msg.time}</span>
                </div>
            ))}
        </div>

        <div className="chat-input-area">
            <input 
                type="text" 
                placeholder={`Message ${activeContact?.name}...`}
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button className="send-btn" onClick={handleSendMessage}>
                <Send size={18} />
            </button>
        </div>
      </div>

      {/* --- RENDER POST MODAL IF OPEN --- */}
      {isPostModalOpen && (
        <PostPage 
          onClose={() => setIsPostModalOpen(false)} 
          user={user} 
        />
      )}

    </div>
  );
};

export default ChatPage;