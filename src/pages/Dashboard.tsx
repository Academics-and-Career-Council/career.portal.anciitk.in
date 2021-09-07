import { useEffect, useState } from "react";
import { Typography } from "antd";
import { Helmet } from "react-helmet";
import { MobileView, BrowserView } from "react-device-detect";

import Wrapper from "../components/Wrapper";
import Loader from "../components/loader";
import MobileWrapper from "../components/MobileWrapper";
import { fetchData } from "../services/fetch";
import "../styles/dashboard.css";

const Dashboard: React.FC = () => {
  const [newsArr, setNewsArr] = useState<News[] | undefined>(undefined);
  const [err, setErr] = useState(undefined);

  useEffect(() => {
    fetchData("http://localhost:5000/news")
      .then((data: News[]) => setNewsArr(data))
      .catch((err) => {
        console.log(err);
        setErr(err.message);
      });
  }, []);

  const { Title, Text } = Typography;

  const jsx = (
    <div>
      <Helmet>
        <title>Career Portal | Dashboard</title>
      </Helmet>
      <Title level={2} className="title">
        Notifications
      </Title>
      {err ? (
        <div>{err}</div>
      ) : newsArr === undefined ? (
        <Loader />
      ) : (
        <div className="newsList">
          {newsArr.length === 0 ? (
            <div>No Latest news to show.</div>
          ) : (
            newsArr.map((news, index) => {
              return (
                <div key={index} className="newsItem">
                  <Text>{news.title}</Text>
                  <Text>{news.date}</Text>
                </div>
              );
            })
          )}
        </div>
      )}
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
