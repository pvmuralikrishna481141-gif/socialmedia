import React, { useState } from 'react';
import { 
  X, Image as ImageIcon, Calendar, Award, Plus, 
  Clock, Smile, Sparkles, Globe, ChevronDown 
} from 'lucide-react';

const PostPage = ({ onClose, user }) => {
  const [text, setText] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Use the prop passed from App.js, or fallback to "User Name"
  const currentUser = user || { name: "User Name", initials: "U" };

  const handleAiRewrite = () => {
    if (!text) return;
    setIsAiLoading(true);
    setTimeout(() => {
      const thoughts = [
        "Excited to share my latest findings on this topic! 🚀 #Innovation #Growth",
        "Reflecting on the progress we've made. It's all about consistency. ✨",
        "Big things are coming. Stay tuned for updates! 🔥 #TechLife"
      ];
      const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
      setText((prev) => `✨ Rewritten: ${prev} \n\n${randomThought}`);
      setIsAiLoading(false);
    }, 1200);
  };

  const handlePost = () => {
    if (!text.trim()) return;
    alert("Post created successfully!");
    onClose(); 
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        {/* --- HEADER --- */}
        <div className="modal-header">
          <div className="user-profile-group">
            <div className="avatar">{currentUser.initials}</div>
            <div className="user-meta">
              
              {/* THIS WILL NOW DISPLAY "User Name" (or whatever is in App.js) */}
              <span className="user-name">
                {currentUser.name} <ChevronDown size={14} />
              </span>
              
              <div className="privacy-badge">
                <Globe size={12} />
                <span>Post to Anyone</span>
              </div>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          <textarea 
            placeholder="What do you want to talk about?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="post-textarea"
            autoFocus
          />
          <button className="emoji-btn">
            <Smile size={22} color="#666" />
          </button>
        </div>

        <div className="modal-footer">
          <div className="footer-tools">
            <button 
              className={`ai-rewrite-btn ${isAiLoading ? 'loading' : ''}`} 
              onClick={handleAiRewrite}
              disabled={!text}
            >
              <Sparkles size={16} className="ai-icon" />
              <span>{isAiLoading ? 'Rewriting...' : 'Rewrite with AI'}</span>
            </button>

            <div className="media-tools">
              <div className="tool-icon" title="Add Image"><ImageIcon size={20} /></div>
              <div className="tool-icon" title="Create Event"><Calendar size={20} /></div>
              <div className="tool-icon" title="Celebrate Occasion"><Award size={20} /></div>
              <div className="tool-icon" title="More"><Plus size={20} /></div>
            </div>
          </div>

          <div className="post-actions-right">
            <div className="clock-icon" title="Schedule for later">
              <Clock size={20} />
            </div>
            <button 
              className="primary-post-btn" 
              disabled={!text.trim()}
              onClick={handlePost}
            >
              Post
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PostPage;