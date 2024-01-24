import React from "react"
const OrderHisTableRow = ({ order, classes }) => {
    const { id, createdAt, amount, email } = order;
    return (
        <div className={classes.tableRow}>
            <div className={classes.tableData} style={{ fontWeight: "400" }}>{id}</div>
            <div className={classes.tableData}>{createdAt}</div>
            <div className={classes.tableData}>{amount}</div>
            <div className={classes.tableData}>{email? <span>{email}</span> : "Email not found"}</div>
        </div>
    )
}

export default OrderHisTableRow