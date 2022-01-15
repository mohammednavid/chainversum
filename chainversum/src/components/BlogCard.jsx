import '../assets/styles/BlogCard.scss'

const BlogCard = ({ image, title, descp, time }) => {
  return (
    <div className="blogCard">
      <img src={image} alt={title} />
      <div className="blogCard_details">
        <h6 className="blogCard_title">{title}</h6>
        <p className="blogCard_descp">{descp}</p>
        <p className="blogCard_time">{time}</p>
      </div>
    </div>
  );
};

export default BlogCard;
