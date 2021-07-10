import React, {FC, Fragment} from "react";
import styles from '../../styles/Home.module.sass'
import {Button, Col, Form, Input, Row} from "antd";
import forms from "../../styles/Form.module.sass";

const Form1: FC = (props) => {

    const uploadComplete = (/*data*/) => {
        props.setCurrent(props.current + 1);
        /*setData(data)*/
    }
    return <Fragment>
        <Form onFinish={uploadComplete}>
            <Row>
                <Col span={16} offset={4} className={forms.form_col}>
                    Какой ВУЗ Вы закончили?
                    <Form.Item name="u_name" rules={[{ required: true }]}>
                        <Input placeholder={"Название ВУЗа..."}/>
                    </Form.Item>
                </Col>
                <Col span={16} offset={4} className={forms.form_col}>
                    Какое направление Вы выбрали?
                    <Form.Item name="direction" rules={[{ required: true }]}>
                        <Input placeholder={"Опишите свой выбор..."}/>
                    </Form.Item>
                </Col>
                <Col span={16} offset={4} className={forms.form_col}>
                    Какой у Вас профиль?
                    <Form.Item name="profile" rules={[{ required: true }]}>
                        <Input placeholder={"Про профиль..."}/>
                    </Form.Item>
                </Col>
                <Col span={16} offset={4} className={forms.form_col}>
                    ВКР Бакалавра:
                    <Form.Item name="VKR" rules={[{ required: true }]}>
                        <Input placeholder={"ВКР..."}/>
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

export default Form1