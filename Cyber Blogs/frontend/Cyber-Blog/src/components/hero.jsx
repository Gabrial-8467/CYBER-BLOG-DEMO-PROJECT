import React, { useState } from 'react';
import { cardData } from '../data';
import { FaThumbsUp, FaThumbsDown, FaComment, FaShareAlt } from 'react-icons/fa';
import './hero.css';

const Hero = () => {
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  const handleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle like state
    }));
    if (dislikes[id]) {
      setDislikes((prev) => ({
        ...prev,
        [id]: false, // Reset dislike if it was selected
      }));
    }
  };

  const handleDislike = (id) => {
    setDislikes((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle dislike state
    }));
    if (likes[id]) {
      setLikes((prev) => ({
        ...prev,
        [id]: false, // Reset like if it was selected
      }));
    }
  };

  return (
    <div className='hero'>
      {cardData.map((card) => (
        <div key={card.id} className='card'>
          <img src={card.image} alt={`Card ${card.id}`} className='card-image' />
          <div className='card-content'>
            <p className='card-description'>{card.description}</p>
            <div className='card-footer'>
              <div className='profile-info'>
                <img src={card.profileImage} alt={`${card.profileName}`} className='profile-icon' />
                <span className='profile-name'>{card.profileName}</span>
                <span className='publish-date'>{card.publishDate}</span>
              </div>
              <button className='read-more'>Read More</button>
            </div>
            <div className='card-actions'>
              <FaThumbsUp
                className={`icon like-icon ${likes[card.id] ? 'active' : ''}`}
                onClick={() => handleLike(card.id)}
              />
              <FaThumbsDown
                className={`icon dislike-icon ${dislikes[card.id] ? 'active' : ''}`}
                onClick={() => handleDislike(card.id)}
              />
              <FaComment className='icon comment-icon' />
              <FaShareAlt className='icon share-icon' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
