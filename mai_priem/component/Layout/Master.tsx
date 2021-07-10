import {FC, Fragment} from "react";
import styles from '../../styles/Home.module.sass'
import {Col} from "antd";

const MasterLayout: FC = ({children}) => {
    return <Fragment>
        <Col span={7} className={styles.masters_cont}>
            <h1>
                {children}
            </h1>
        </Col>
    </Fragment>
}

export default MasterLayout