import '../styles/components/TestimonialCard.css';

const TestimonialCard = ({ review, name, role, avatar }) => {
  return (
    <div className="testimonial-card">
      <div className="stars">
        <span className="star">★</span>
        <span className="star">★</span>
        <span className="star">★</span>
        <span className="star">★</span>
        <span className="star">★</span>
      </div>
      <p className="review-text">{review}</p>
      <div className="reviewer">
        <img src={avatar} alt={name} className="avatar-img" />
        <div>
          <h3 className="reviewer-name">{name}</h3>
          <p className="reviewer-role">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;