import React, {FC, Fragment} from "react";
import styles from '../../styles/Home.module.sass'
import {Button, Col, Form, Input, Row} from "antd";
import forms from "../../styles/Form.module.sass";

const Form5: FC = (props) => {
    const uploadComplete = (data:any) => {
        props.onComplete(data);
    }

    return <Fragment>
        <Form onFinish={uploadComplete}>
            <Row>
                <Col span={16} offset={4} className={forms.form_col}>
                    Напишите здесь мотивационное письмо
                    <Form.Item name="letter" rules={[{ required: true }]}>
                        <Input placeholder={"Письмо..."}/>
                    </Form.Item>
                </Col>
                <Col span={16} offset={4} className={forms.form_col}>
                    Как вы видите свою ИОТ?
                    <Form.Item name="IOT" rules={[{ required: true }]}>
                        <Input placeholder={"Опишите про ИОТ..."}/>
                    </Form.Item>
                </Col>
                <Col span={16} offset={4} className={forms.form_col}>
                    Как вы видите свою карьеру?
                    <Form.Item name="career" rules={[{ required: true }]}>
                        <Input placeholder={"Опишите про карьеру..."}/>
                    </Form.Item>
                </Col>
                <Col span={2} offset={11} className={forms.form_col}>
                    <Button type="primary" htmlType="submit">
                        Далее
                    </Button>
                </Col>
            </Row>
        </Form>
    </Fragment>
}

export default Form5