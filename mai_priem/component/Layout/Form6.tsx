import React, {FC, Fragment} from "react";
import styles from '../../styles/Home.module.sass'
import {Button, Col, Form, Input, Row} from "antd";
import forms from "../../styles/Form.module.sass";

const Form6: FC = () => {
    const [current, setCurrent] = React.useState(6);

    const uploadComplete = (/*data*/) => {
        /*setData(data)*/
    }
    return <Fragment>
        <Form onFinish={uploadComplete}>
            <Row>
                <Col span={16} offset={4} className={forms.form_col}>
                    Какие иностранные языки вы знаете? Насколько хорошо?
                    <Input placeholder={"Ин. Языки..."}/>
                </Col>
                <Col span={16} offset={4} className={forms.form_col}>
                    Опишите свою модель интересов
                    <Input placeholder={"Интересы..."}/>
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

export default Form6