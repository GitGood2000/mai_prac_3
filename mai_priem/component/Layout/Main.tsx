import {FC, Fragment} from "react";
import styles from '../../styles/Home.module.sass'
import header from '../../styles/Header.module.sass'
import footer from '../../styles/Footer.module.sass'
import {Row, Col, Menu} from 'antd'
import Link from 'next/link'

const MainLayout: FC = ({children}) => {
    return <Fragment>

        <div className={header.nav_col}>
            <div className={header.logo}/>
            <div className={header.sub_transition}/>
            <div className={header.nav_wrapper}>
                <Menu className={header.nav_menu} mode="horizontal">
                    <Menu.Item className={header.item} key="1">nav 1</Menu.Item>
                    <Menu.Item className={header.item} key="2">nav 2</Menu.Item>
                    <Menu.Item className={header.item} key="3">nav 3</Menu.Item>
                </Menu>
                <Menu className={header.sub_menu} mode="horizontal">
                    <Menu.Item className={header.item} key="1">
                        <Link href="/">
                            <a>Главная</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item className={header.item} key="2">
                        <Link href="/masters">
                            <a>Магистратуры</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item className={header.item} key="3">
                        <Link href="/contacts">
                            <a>Контакты</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item className={`${header.item} ${header.item_special}`} key="4">
                        <Link href="/form">
                            <a>Заполнить Анкету</a>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        </div>

        {children}
        <div className={footer.foot_col}>
            <Row justify="space-around">
                <Col span={5} className={footer.foot_part}>Почта</Col>
                <Col span={5} className={footer.foot_part}>Адресс</Col>
                <Col span={5} className={footer.foot_part}>Телефон</Col>
                <Col span={5} className={footer.foot_part}>Иконки соцсетей</Col>
            </Row>
        </div>
    </Fragment>
}

export default MainLayout