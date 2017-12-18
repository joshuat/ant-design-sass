import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'antd';

class App extends Component {
  render() {
    return (
      <Row>
        <Col
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 12, offset: 6 }}
          md={{ span: 8, offset: 8 }}
          lg={{ span: 6, offset: 9 }}>
          <Card title="Welcome to Sass">
            <p style={{ marginBottom: 25 }}>Ant Design, but with less less and more sass.</p>
            <Button type="primary" href="https://github.com/joshua-turner/ant-design-sass">View on GitHub</Button>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default App;
