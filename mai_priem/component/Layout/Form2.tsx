import React, {FC, Fragment} from "react";
import styles from '../../styles/Home.module.sass'
import {Button, Col, Form, Input, Row} from "antd";
import forms from "../../styles/Form.module.sass";

const Form2: FC = () => {
    const [current, setCurrent] = React.useState(1);

    const uploadComplete = (/*data*/) => {
        setCurrent(current + 1);
        /*setData(data)*/
    }
    return <Fragment>
        <Form onFinish={uploadComplete}>
            <Row>
                <Col span={16} offset={4} className={forms.form_col}>
                    Какой у вас опыт работы?
                    <Input placeholder={"Опыт..."}/>
                </Col>
                <Col span={16} offset={4} className={forms.form_col}>
                    Где вы работаете?
                    <Input placeholder={"Место работы..."}/>
                </Col>
                <Col span={16} offset={4} className={forms.form_col}>
                    Какая у Вас должность?
                    <Input placeholder={"Про должность..."}/>
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

export default Form2