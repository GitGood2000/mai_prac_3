import MainLayout from "../component/Layout/Main"
import styles from '../styles/Home.module.sass'
import {Row, Col} from 'antd'

export default function Home() {
    return (
        <MainLayout>
            <div className={styles.main_col}>
                <Row className={styles.main_row}>
                    <Col span={12} offset={2} className={styles.big_cont}>
                        <h1>Карта</h1>
                    </Col>
                    <Col span={8}>
                        <div className={styles.small_cont}>
                            <h2>Адрес + телефон</h2>
                        </div>
                        <div className={styles.small_cont}>
                            <h2>Доп. Данные</h2>
                        </div>
                    </Col>
                </Row>
                <Row justify="space-around">
                    <Col span={7} className={styles.small_cont}>Текст</Col>
                    <Col span={7} className={styles.small_cont}>Текст</Col>
                    <Col span={7} className={styles.small_cont}>Текст</Col>
                </Row>
            </div>
        </MainLayout>
    )
}
