import React from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import CardBlogPost from '../components/CardBlogPost/CardBlogPost';
import { useQuery, gql } from '@apollo/client';

const Blog: React.FC = () => {
  const { data, loading, error } = useQuery(query);
  console.log(data)
  return (
    <Container className="my-5">
        <h1 className="text-center mb-4">Esto es un blog</h1>
        {loading && <Spinner animation="border" />}
        {error && <Alert variant="danger">{error.message}</Alert>}
        <Row className="justify-content-start">
          {
          data?.blogPostsCollection?.items.length > 0 && data.blogPostsCollection.items.map((post) => (
            <Col xs={12} sm={6} md={4} key={post.slug} className="mb-4">
              <CardBlogPost post={post} />
            </Col>
          ))}
        </Row>
    </Container>
  );
}

export default Blog;

const query = gql`
  query {
    blogPostsCollection {
      items {
        title
        slug
        content
        image {
          url
        }
      }
    }
  }
`