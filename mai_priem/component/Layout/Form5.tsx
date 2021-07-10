import React, {FC, Fragment} from "react";
import styles from '../../styles/Home.module.sass'
import {Button, Col, Form, Input, Row} from "antd";
import forms from "../../styles/Form.module.sass";

const Form5: FC = () => {
    const [current, setCurrent] = React.useState(0);

    const uploadComplete = (/*data*/) => {
        setCurrent(current + 1);
        /*setData(data)*/
    }
    return <Fragment>
        <Form onFinish={uploadComplete}>
            <Row>
                <Col span={16} offset={4} className={forms.form_col}>
                    Напишите здесь мотивационное письмо
                    <Input placeholder={"Письмо..."}/>
                </Col>
                <Col span={16} offset={4} className={forms.form_col}>
                    Как вы видите свою ИОТ
                    <Input placeholder={"Опишите про ИОТ..."}/>
                </Col>
                <Col span={16} offset={4} className={forms.form_col}>
                    Какой проект вы хотели бы реализовать?
                    <Input placeholder={"Опишите про ИОТ..."}/>
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