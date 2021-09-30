import { Modal } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

export function showPromiseConfirm() {
  confirm({
    title: "Do you want to delete these items?",
    icon: <CheckCircleOutlined />,
    content: "Member saved",
    onOk() {},
    onCancel() {},
  });
}

export function success(content: any) {
  Modal.success({
    title: "Success",
    content,
  });
}

export function Edit({
  isModalVisible,
  handleOk,
  handleCancel,
  children,
}: any) {
  return (
    <>
      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
}
