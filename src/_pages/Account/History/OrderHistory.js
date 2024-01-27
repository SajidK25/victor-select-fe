import { Typography, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { useQuery } from "react-apollo";
import { ORDERLIST, } from "../../../Graphql/Orders";
import { ErrorMessage, Loading } from "../../../_components";
import OrderHisTableRow from "../../../_components/OrderHisTableRow";

const useStyles = makeStyles({
    app: {
        background: "#000"
    },
    heading: {
        fontSize: 20,
        fontWeight: 500,
        marginTop: 25,
        marginBottom: 20,
    },
    // Container styles
    container: {
        maxWidth: 10000,
        marginRight: "auto",
        marginLeft: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
    },

    // Table styles
    table: {
        width: "100%",
        border: "1px solid #eeeeee",
    },

    // Table header styles
    tableHeader: {
        display: "flex",
        width: "100%",
        background: "#ffa500",
        padding: "14px 0",
        borderStartEndRadius: "10px",
        borderTopLeftRadius: "10px"
    },

    // Table row styles
    tableRow: {
        display: "flex",
        width: "100%",
        padding: "13px 27px",
        "&:nth-of-type(odd)": {
            background: "#eeeeee",
        },
    },

    // Table data and header item styles
    tableData: {
        flex: "1 1 20%",
        textAlign: "center",
    },
    headerItem: {
        flex: "1 1 20%",
        textAlign: "center",
        textTransform: "",
        color: "#fff",
        fontWeight: "bold",
    },

    // Filter link styles
    filterLink: {
        color: "#fff",
        fontWeight: "bold",
        textDecoration: "none",
        position: "relative",
        display: "inline-block",
        paddingLeft: "24px",
        paddingRight: "24px",
        "&:hover": {
            backgroundColor: '#F1DEDE'
        },
        "&::after": {
            content: '""',
            position: "absolute",
            right: "-18px",
            color: "white",
            fontSize: "12px",
            top: "50%",
            transform: "translateY(-50%)",
        },

    },
});
const OrderHistory = () => {
    const classes = useStyles();
    const { loading, error: queryError, data } = useQuery(ORDERLIST, {
        variables: { email: "fortesting@gmail.com", },
    });

    if (loading) return <Loading />;
    if (queryError) return <ErrorMessage error={queryError} />;
    if (data?.orderHistoryById.length == 0) return <Typography className={classes.heading}>No Current Order History</Typography>
    if (!data) return <p>No treatment plans</p>;

    console.log({ data, loading, queryError })
    return <div>
        <div className="">
            <h3 className={classes.firstHeading2}>ORDER HISTORY</h3>
            {/* start here */}
            <div className=''>
                <div className={classes.table}>
                    <div className={classes.tableHeader}>
                        <div className={classes.headerItem}>Order Id</div>
                        <div className={classes.headerItem}>Order Date</div>
                        <div className={classes.headerItem}>Amount</div>
                        <div className={classes.headerItem}>Status</div>
                        <div className={classes.headerItem}>Email</div>
                    </div>
                    <div className="table-content">
                        {
                            data?.orderHistoryById?.map(order => <OrderHisTableRow key={order?.id} order={order} classes={classes} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default OrderHistory