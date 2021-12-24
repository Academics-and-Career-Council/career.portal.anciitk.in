import * as React from "react";
import { Button, Result, Space, Typography } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import {Link} from 'react-router-dom'

type State = {
  error: Error | undefined;
};

const { Paragraph, Text } = Typography;

class ErrorBoundary extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: Error) {
    // @ts-ignore
    return { error: error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <Result
          status="error"
          title="Something Went Wrong"
          subTitle="Please check everything is fine. If you think this is a mistake than contact the developer."
          extra={
            <Space>
              <Button>
                <a href="https://anciitk.in/contact">Contact</a>
              </Button>
              <Button>
                <Link to="/">Home</Link>
              </Button>
            </Space>
          }
        >
          <div className="desc">
            <Paragraph>
              <Text
                strong
                style={{
                  fontSize: 16,
                }}
              >
                The content you submitted has the following error:
              </Text>
            </Paragraph>
            <Paragraph>
              <CloseCircleOutlined style={{ color: "red" }} />{" "}
              <strong>Error Source: </strong>
              {this.state.error.name}
            </Paragraph>
            <Paragraph>
              <CloseCircleOutlined style={{ color: "red" }} />{" "}
              <strong>Additional Remarks: </strong>
              {this.state.error.message}
            </Paragraph>
          </div>
        </Result>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
