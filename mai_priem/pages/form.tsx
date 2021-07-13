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
import {Row, Col, Input, Steps, Button, message, Form, Result} from 'antd'

const { Step } = Steps;

export default function Home() {
    const [current, setCurrent] = React.useState(0);
    const [formdata, setFormData] = React.useState({});

    const step_complete = (data:any) => {
        setFormData(data);
        setCurrent(current+1)
    }

    const step_final_complete = (data:any) => {
        setFormData(data);
        setCurrent(current+1)
    }

    const steps = [
        {
            title: 'Начало',
            content: <Form1 onComplete={step_complete}/>
        },
        {
            title: 'Опыт работы',
            content: <Form2 onComplete={step_complete}></Form2>
        },
        {
            title: 'Github',
            content: <Form3 onComplete={step_complete}></Form3>
        },
        {
            title: 'Достижения',
            content: <Form4 onComplete={step_complete}></Form4>
        },
        {
            title: 'Будущее',
            content: <Form5 onComplete={step_complete}></Form5>
        },
        {
            title: 'Завершение',
            content: <Form6 onComplete={step_complete}></Form6>
        },
        {
            title: 'Готово!',
            content: <Row>
                <Col span={16} offset={4} className={forms.form_col}>
                    <Result
                        status="success"
                        title="Ваша анкета заполнена"
                        subTitle="Спасибо"
                        extra={
                            <Button type="primary" key="console" href={'/'}>
                                На главную
                            </Button>
                        }
                    />
                </Col>
            </Row>
        }
    ];

    return (
        <MainLayout>
            <div className={styles.main_col}>
                <Row className={styles.main_row}>
                    <Col span={22} offset={1}>
                        <Steps className={forms.steps_col} current={current}>
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