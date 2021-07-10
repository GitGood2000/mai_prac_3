import React, {FC, Fragment} from "react";
import styles from '../../styles/Home.module.sass'
import {Button, Col, Form, Input, Row} from "antd";
import forms from "../../styles/Form.module.sass";

const Form4: FC = (props) => {
    const uploadComplete = (data:any) => {
        props.onComplete(data);
    }

    return <Fragment>
        <Form onFinish={uploadComplete}>
            <Row>
                <Col span={16} offset={4} className={forms.form_col}>
                    Опишите свои достижения в учёбе и науке
                    <Form.Item name="ach" rules={[{ required: true }]}>
                        <Input placeholder={"Достижения..."}/>
                    </Form.Item>
                </Col>
                <Col span={16} offset={4} className={forms.form_col}>
                    Напишите ссылки на ваши публикации
                    <Form.Item name="pubs" rules={[{ required: true }]}>
                        <Input placeholder={"Публикации..."}/>
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

export default Form4