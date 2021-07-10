import MainLayout from "../component/Layout/Main"
import MasterLayout from "../component/Layout/Master"
import styles from '../styles/Home.module.sass'
import {Row, Col} from 'antd'

export default function Home() {
    return (
        <MainLayout>
            <div className={styles.main_col}>
                <Row justify="space-around" className={styles.main_row}>
                    <MasterLayout>Управление цифровым производством</MasterLayout>
                    <MasterLayout>Виртуальная/дополненная реальность и искусственный интеллект</MasterLayout>
                    <MasterLayout>Управление продуктовой разработкой IT-сервисов</MasterLayout>
                </Row>
                <Row justify="space-around" className={styles.main_row}>
                    <MasterLayout>Технологии суперкомпьютерного моделирования сложных технических систем</MasterLayout>
                    <MasterLayout>Интернет вещей</MasterLayout>
                    <MasterLayout>Кибербезопасность инфокоммуникаций</MasterLayout>
                </Row>
                <Row justify="space-around" className={styles.main_row}>
                    <MasterLayout>Компьютерное моделирование и оптимизация информационных систем</MasterLayout>
                    <MasterLayout>Проектирование высоконагруженных интернет-сервисов</MasterLayout>
                    <MasterLayout>Прикладные задачи машинного обучения и анализ больших данных</MasterLayout>
                </Row>
                <Row justify="space-around" className={styles.main_row}>
                    <MasterLayout>Методы, средства и технологии разработки программно-информационных систем</MasterLayout>
                    <MasterLayout>Системы мобильной связи</MasterLayout>
                    <MasterLayout>САПР (научно-исследовательский)</MasterLayout>
                </Row>
                <Row justify="space-around" className={styles.main_row}>
                    <MasterLayout>Программно-информационные системы</MasterLayout>
                    <MasterLayout>Автоматизированное управление ресурсами в экономике</MasterLayout>
                    <MasterLayout>Математическое и программное обеспечение мехатронных систем</MasterLayout>
                </Row>
                <Row justify="space-around" className={styles.main_row}>
                    <MasterLayout>Математическое и программное обеспечение вычислительных систем</MasterLayout>
                    <MasterLayout>Автоматизированные системы обработки информации и управления</MasterLayout>
                    <MasterLayout>Консалтинг и управление в области информатизации организаций</MasterLayout>
                </Row>
                <Row justify="space-around" className={styles.main_row}>
                    <MasterLayout>Компьютерные науки</MasterLayout>
                    <MasterLayout>Информационные технологии в управлении</MasterLayout>
                    <MasterLayout>Информационное и программное обеспечение информационных систем</MasterLayout>
                </Row>
                <Row justify="space-around" className={styles.main_row}>
                    <MasterLayout>Интеллектуальный мониторинг инфраструктурных систем</MasterLayout>
                    <MasterLayout>Вычислительные машины, комплексы, системы и сети</MasterLayout>
                    <MasterLayout>Математическая экономика</MasterLayout>
                </Row>
            </div>
        </MainLayout>
    )
}
