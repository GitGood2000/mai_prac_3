import React, {FC, Fragment} from "react";
import styles from '../../styles/Home.module.sass'
import {Button, Col, Form, Input, Row} from "antd";
import forms from "../../styles/Form.module.sass";

const Form3: FC = (props) => {
    const [current, setCurrent] = React.useState(3);

    const uploadComplete = (/*data*/) => {
        setCurrent(current + 1);
        /*setData(data)*/
    }
    return <Fragment>
        <Form onFinish={uploadComplete}>
            <Row>
                <Col span={16} offset={4} className={forms.form_col}>
                    Напишите здесь ссылку на ваш профиль Github
                    <Input placeholder={"Ссылка..."}/>
                </Col>
                <Col span={16} offset={4} className={forms.form_col}>
                    Какие библиотеки и языки вы используете
                    <Input placeholder={"Опишите про библиотеки..."}/>
                </Col>
                <Col span={16} offset={4} className={forms.form_col}>
                    Какой проект вы хотели бы реализовать?
                    <Input placeholder={"Про проект..."}/>
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