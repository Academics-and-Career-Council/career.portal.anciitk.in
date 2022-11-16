import type { DashboardQuery as DashboardQueryType } from "../__generated__/DashboardQuery.graphql";
import { Typography, Collapse, Space } from "antd";
import { CaretRightOutlined } from '@ant-design/icons';
import { Helmet } from "react-helmet";
import { MobileView, BrowserView } from "react-device-detect";
import { GraphQLTaggedNode, usePreloadedQuery } from "react-relay";
import parse from "html-react-parser";
import MarkdownIt from "markdown-it";
import moment from "moment";

import Wrapper from "../components/Wrapper";
import MobileWrapper from "../components/MobileWrapper";
import "../styles/dashboard.css";

type Props = {
  queryRef: any;
  query: GraphQLTaggedNode;
};

const Dashboard: React.FC<Props> = ({ queryRef, query }) => {
  // const [err, setErr] = useState(undefined);
  const data = usePreloadedQuery<DashboardQueryType>(query, queryRef);

  const mdParser = new MarkdownIt();
  const { Title, Text } = Typography;
  const { Panel } = Collapse;

  const jsx = (
    <div>
      <Helmet>
        <title>Career Portal | Dashboard</title>
      </Helmet>
      <Title level={2} className="title">
        Notifications
      </Title>
      <div className="newsList">
        {data.getNotifications.length === 0 ? (
          <div>No Latest news to show.</div>
        ) : (
          <Collapse
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            accordion
            bordered={false}
            style={{ width: '100%' }}
          >
            {data.getNotifications.map(news => news).sort((a, b) => moment(a?.modified).diff(moment(b?.modified))).map((news, index) => {
              return (
                <Panel
                  key={index}
                  header={
                    <Space
                      align="end"
                      style={{ justifyContent: "space-between", width: 'calc(100% - 25px)' }}
                    >
                      <Title level={5} style={{ margin: 0 }}>
                        {news?.heading}
                      </Title>
                      <Text>
                        {moment(news?.modified).format("MMM Do YY HH:mm a")}
                      </Text>
                    </Space>
                  }
                >
                  {parse(mdParser.render(news?.data || ""))}
                </Panel>
              );
            })}
          </Collapse>
        )}
      </div>
    </div>
  );

  return (
    <>
      <MobileView>
        <MobileWrapper Component={jsx} />
      </MobileView>
      <BrowserView>
        <Wrapper component={jsx} />
      </BrowserView>
    </>
  );
};

export default Dashboard;
