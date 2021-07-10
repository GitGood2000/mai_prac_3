import React, {FC, Fragment} from "react";
import styles from '../../styles/Home.module.sass'
import {Button, Col, Form, Input, Row} from "antd";
import forms from "../../styles/Form.module.sass";

const Form3: FC = (props) => {
    const uploadComplete = (data) => {
        props.onComplete(data);
    }

    return <Fragment>
        <Form onFinish={uploadComplete}>
            <Row>
                <Col span={16} offset={4} className={forms.form_col}>
                    Напишите здесь ссылку на ваш профиль Github
                    <Form.Item name="Git" rules={[{ required: true }]}>
                        <Input placeholder={"Ссылка..."}/>
                    </Form.Item>
                </Col>
                <Col span={16} offset={4} className={forms.form_col}>
                    Какие библиотеки и языки вы используете
                    <Form.Item name="libs" rules={[{ required: true }]}>
                        <Input placeholder={"Опишите про библиотеки..."}/>
                    </Form.Item>
                </Col>
                <Col span={16} offset={4} className={forms.form_col}>
                    Какой проект вы хотели бы реализовать?
                    <Form.Item name="proj" rules={[{ required: true }]}>
                        <Input placeholder={"Про проект..."}/>
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

export default Form3