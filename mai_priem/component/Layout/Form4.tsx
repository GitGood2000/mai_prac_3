import React, {FC, Fragment} from "react";
import styles from '../../styles/Home.module.sass'
import {Button, Col, Form, Input, Row} from "antd";
import forms from "../../styles/Form.module.sass";

const Form4: FC = (props) => {
    const [current, setCurrent] = React.useState(4);

    const uploadComplete = (/*data*/) => {
        setCurrent(current + 1);
        /*setData(data)*/
    }
    return <Fragment>
        <Form onFinish={uploadComplete}>
            <Row>
                <Col span={16} offset={4} className={forms.form_col}>
                    Опишите свои достижения в учёбе и науке
                    <Input placeholder={"Достижения..."}/>
                </Col>
                <Col span={16} offset={4} className={forms.form_col}>
                    Напишите ссылки на ваши публикации
                    <Input placeholder={"Публикации..."}/>
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