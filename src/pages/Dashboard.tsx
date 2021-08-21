import React, { ReactElement } from "react";
import { Row, Col, Card, Menu } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

type ContentKey = "article" | "app" | "project";

const tabListNoTitle = [
  {
    key: "article",
    tab: "article",
  },
  {
    key: "app",
    tab: "app",
  },
  {
    key: "project",
    tab: "project",
  },
];

interface StringArray {
  [index: string]: ReactElement<any, any>;
}

const contentListNoTitle: StringArray = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};

const Dashboard = () => {
  const [loading, setLoading] = React.useState(true);
  const [noTitleKey, setnoTitleKey] = React.useState<any | null>("article");

  const responsive = useBreakpoint();

  const onChange = () => {
    setLoading(!loading);
  };

  const onTabChange = (key: string, type: any): any => {
    console.log(key, type);
    // setnoTitleKey({ [type]: key });

    switch (key) {
      case "article":
        setnoTitleKey("article");
        break;
      case "app":
        setnoTitleKey("app");
        break;
      case "project":
        setnoTitleKey("project");
        break;
      default:
    }
  };

  //console.log(noTitleKey);
  //  console.log(contentListNoTitle);

  return (
    <>
      {/* <Switch checked={!loading} onChange={onChange} /> */}

      <div className="site-card-wrapper" style={{ marginBottom: 16 }}>
        <Row gutter={[16, responsive.xs ? 16 : 0]}>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>

          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>

          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>

          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>

      <div className="site-card-wrapper" style={{ marginBottom: 16 }}>
        <Card
          style={{ width: "100%" }}
          tabList={tabListNoTitle}
          activeTabKey={noTitleKey}
          onTabChange={(key) => {
            onTabChange(key, "noTitleKey");
          }}
        >
          {contentListNoTitle[noTitleKey]}
        </Card>
      </div>

      <div className="site-card-wrapper">
        <Row gutter={[16, responsive.xs ? 16 : 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;