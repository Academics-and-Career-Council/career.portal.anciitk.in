import { useEffect, useState } from "react";
import { Result, Typography } from "antd";
import { permissions } from "../services/abac";
import { secured } from "react-abac";

import Wrapper from "../components/Wrapper";
import Loader from "../components/loader";
import "../styles/dashboard.css";

const Dashboard: React.FC = () => {
  const [newsArr, setNewsArr] = useState<News[] | undefined>(undefined);
  const [err, setErr] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/news");
      return res.json();
    };

    fetchData()
      .then((data: News[]) => setNewsArr(data))
      .catch((err) => {
        console.log(err);
        setErr(err.message);
      });
  }, []);

  const { Title, Text } = Typography;

  const jsx = (
    <div>
      <Title level={2} className="title">
        News
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

  return <Wrapper component={jsx} />;
};

export default secured({
  permissions: permissions.ELEVATE_USER,
  mapPropsToData: (props) => props,
  noAccess: () => <Result status="403" title="Unauthorized Access"></Result>,
})(Dashboard);
