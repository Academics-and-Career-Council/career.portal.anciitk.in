import type { DashboardQuery as DashboardQueryType } from "../__generated__/DashboardQuery.graphql";
import { Typography } from "antd";
import { Helmet } from "react-helmet";
import { MobileView, BrowserView } from "react-device-detect";
import { GraphQLTaggedNode, usePreloadedQuery } from "react-relay";
import { useState } from "react";

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

  const { Title, Text } = Typography;

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
          data.getNotifications.map((news, index) => {
            return (
              <div key={index} className="newsItem">
                <Text>{news?.heading}</Text>
                <Text>{news?.data}</Text>
              </div>
            );
          })
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
