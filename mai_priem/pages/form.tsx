import MainLayout from "../component/Layout/Main"
import styles from '../styles/Home.module.sass'
import forms from '../styles/Form.module.sass'
import React from 'react'
import {Row, Col, Input, Steps, Button, message} from 'antd'

const { Step } = Steps;

const steps = [
    {
        title: 'Начало',
        content: 'Как запихнуть сюда формы под этим окном, менять их + после завершения заполнения перенести на главную?',
    },
    {
        title: 'Опыт работы',
        content: 'Second-content',
    },
    {
        title: 'Third',
        content: 'Third-content',
    },
    {
        title: 'Forth',
        content: 'Forth-content',
    },
    {
        title: 'Завершение',
        content: 'Last-content',
    },
];

export default function Home() {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    return (
        <MainLayout>
            <div className={styles.main_col}>
                <Row className={styles.main_row}>
                    <Col span={16} offset={4}>
                        <Steps current={current}>
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                        <div className={forms.steps_content}>{steps[current].content}</div>
                        <div className={forms.steps_action}>
                            {current < steps.length - 1 && (
                                <Button type="primary" onClick={() => next()}>
                                    Далее
                                </Button>
                            )}
                            {current === steps.length - 1 && (
                                <Button type="primary" onClick={() => message.success('Анкета заполнена!')}>
                                    Подать Анкету
                                </Button>
                            )}
                            {current > 0 && (
                                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                    Назад
                                </Button>
                            )}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} offset={6} className={forms.form_col}>
                        Какой ВУЗ Вы закончили?
                        <Input placeholder={"Название ВУЗа..."}/>
                    </Col>
                    <Col span={12} offset={6} className={forms.form_col}>
                        Какое направление Вы выбрали?
                        <Input placeholder={"Опишите свой выбор..."}/>
                    </Col>
                    <Col span={12} offset={6} className={forms.form_col}>
                        Какой у Вас профиль?
                        <Input placeholder={"Про профиль..."}/>
                    </Col>
                </Row>
            </div>
        </MainLayout>
    )
}