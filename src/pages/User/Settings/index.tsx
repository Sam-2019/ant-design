import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "@ant-design/pro-layout";
import SettingsItem from "./Settings";

export default function Settings() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <PageHeader
        className="site-page-header goBack"
        onBack={() => navigate(-1)}
        title={
          <>
            <span className="breadcrumb">Settings</span>
          </>
        }
      />

      <SettingsItem />
    </Fragment>
  );
}
