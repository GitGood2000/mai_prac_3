import MainLayout from "../component/Layout/Main"
import styles from '../styles/Home.module.sass'
import {Row, Col} from 'antd'

export default function Home() {
  return (
    <MainLayout>
        <div className={styles.main_col}>
            <Row className={styles.main_row}>
                <Col span={12} offset={2} className={styles.big_cont_main}>
                    <h1>Управление цифровым производством</h1>
                </Col>
                <Col span={8}>
                    <div className={styles.small_cont_main}>
                        <h2>Виртуальная/дополненная реальность и искусственный интеллект</h2>
                    </div>
                    <div className={styles.small_cont_main}>
                        <h2>Управление продуктовой разработкой IT-сервисов</h2>
                    </div>
                </Col>
            </Row>
        </div>
    </MainLayout>
  )
}
