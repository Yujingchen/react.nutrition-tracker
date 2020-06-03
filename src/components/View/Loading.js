import React from 'react';
import Card from "../Progress/Section/Card"
import styles from "./Loading.module.scss"
import DataForm from "../Progress/dataform/DataForm"

const Loading = () => {
    const sectionLoading = [1, 2, 3].map(index => {
        return (
            <Card key={index}>
            </Card>
        )
    })
    const dataFormLoading =
        (
                <DataForm>
                    <div className={styles["form__content"]}>
                    </div>
                </DataForm>
        )
    return (
        <div className={styles["loading"]}>
            <div className={styles["section"]}>
                {sectionLoading}
            </div >
            {dataFormLoading}
            <div className={styles["loading-grid"]}>
                {dataFormLoading}
                {dataFormLoading}
            </div>
        </div>
    )
}




export default Loading