import React from "react"
import GetDateAndTimeIntoIso from "./GetDateAndTimeIntoIso";
const OrderHisTableRow = ({ order, classes }) => {
    const { id, createdAt, amount, user, status } = order;
    return (
        <div className={classes.tableRow}>
            <div className={classes.tableData} style={{ fontWeight: "400" }}>{id}</div>
            <div className={classes.tableData}>
                <GetDateAndTimeIntoIso isoString={createdAt}/>
            </div>
            // <div className={classes.tableData} style={{fontWeight:"400"}}>${amount.toFixed(2)}</div>
            <div className={classes.tableData}>{ status}</div>
            <div className={classes.tableData}>{ user?.email }</div>
        </div>
    )
}

export default OrderHisTableRow
