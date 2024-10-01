
import { Card } from 'react-bootstrap'
import { BlogPost } from '../../utils/types'

interface CardBlogPostProps {
  post: BlogPost
}

const CardBlogPost = ({ post }: CardBlogPostProps) => {
  return (
    <Card className="shadow-sm border-light">
      <Card.Img variant="top" src={post.image?.url} alt={post.title} className="card-img-top" />
      <Card.Body>
        <Card.Title className="font-weight-bold">{post.title}</Card.Title>
        <Card.Text>{post.content.substring(0, 100)}...</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardBlogPost