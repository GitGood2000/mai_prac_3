import MainLayout from '../component/Layout/Main'
import Form1 from '../component/Layout/Form1'
import Form2 from '../component/Layout/Form2'
import Form3 from '../component/Layout/Form3'
import Form4 from '../component/Layout/Form4'
import Form5 from '../component/Layout/Form5'
import Form6 from '../component/Layout/Form6'
import styles from '../styles/Home.module.sass'
import forms from '../styles/Form.module.sass'
import React from 'react'
import {Row, Col, Input, Steps, Button, message, Form} from 'antd'

const { Step } = Steps;

export default function Home() {
    const [current, setCurrent] = React.useState(0);

    const steps = [
        {
            title: 'Начало',
            content: <Form1></Form1>
        },
        {
            title: 'Опыт работы',
            content: <Form2></Form2>
        },
        {
            title: 'Github',
            content: <Form3></Form3>
        },
        {
            title: 'Достижения',
            content: <Form4></Form4>
        },
        {
            title: 'Будущее',
            content: <Form5></Form5>
        },
        {
            title: 'Завершение',
            content: <Form6></Form6>
        }
    ];

    return (
        <MainLayout>
            <div className={styles.main_col}>
                <Row className={styles.main_row}>
                    <Col span={18} offset={3}>
                        <Steps current={current}>
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                        <div className={forms.steps_content}>{steps[current].content}</div>
                    </Col>
                </Row>
            </div>
        </MainLayout>
    )
}