import { Input, DatePicker, Form, Button, InputNumber } from "antd";
import { useMutation } from "@apollo/client";
import GoBack from "../../components/GoBack";
import { ADD_PLEDGE } from "../../utils/graphqlFunctions/mutations";
import { success } from "../../components/Modal/Modal";

function Pledge() {
  const [form] = Form.useForm();
  const [addPledge] = useMutation(ADD_PLEDGE);

  const onFinish = (fieldsValue: any) => {
    const values = {
      ...fieldsValue,
      pledgeDate: fieldsValue["pledgeDate"].format("YYYY-MM-DD"),
      redeemedDate: fieldsValue["redeemedDate"].format("YYYY-MM-DD"),
    };
    //  console.log("Received values of form: ", values);

    const {
      pledgeDate,
      firstName,
      lastName,
      otherName,
      contact,
      emailAddress,
      programme,
      redeemedDate,
      amount,
    } = values;

    addPledge({
      variables: {
        addPledge: {
          pledgeDate,
          firstName,
          lastName,
          otherName,
          contact,
          emailAddress,
          programme,
          redeemedDate,
          amount,
        },
      },
    });

    form.resetFields();

    success("Pledge added");
  };

  return (
    <div>
      <GoBack header="Add Pledge" />
      <Form
        form={form}
        name="member"
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          name="pledgeDate"
          label="Date"
          rules={[{ required: true, message: "Required!" }]}
        >
          <DatePicker style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="otherName"
          label="Other Name"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="contact"
          label="Contact"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="emailAddress"
          label="Email Address"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="programme"
          label="Programme"
          rules={[{ required: true, message: "Required!" }]}
        >
          <Input style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="amount"
          label="Amount"
          rules={[{ required: true, message: "Required!" }]}
        >
          <InputNumber style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="redeemedDate"
          label="Redeem Date"
          rules={[{ required: true, message: "Required!" }]}
        >
          <DatePicker style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Pledge;