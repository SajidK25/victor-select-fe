import { makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { useQuery } from "react-apollo";
import { ORDERLIST, } from "../../../Graphql/Orders";
import { ErrorMessage, Loading } from "../../../_components";
import OrderHisTableRow from "../../../_components/OrderHisTableRow";
import { UserContext } from "../../../context/UserProvider";
import { PATIENT_PRESCRIPTIONS } from "../../../Graphql";
const useStyles = makeStyles({
    app: {
        background: "#000"
    },
    noPadd: {
        marginTop: "-1rem",
    },
    orrangeBox: {
        background: "#ffa500",
        color: "#fff",
        fontWeight: "400",
        borderRadius: "3px"
    },
    addPadd: {
        padding: "7px 10px"
    },
    tableHead: {
        display: "flex",
        justifyContent: "space-between",
        justifyItems: "center",
        padding: "10px",
        borderBottom: "2px solid #e1e1e1",
        fontWeight: "400",
        color: "#545643",
    },
    tableRow: {
        display: "flex",
        justifyContent: "space-between",
        justifyItems: "center",
        padding: "10px",
        borderBottom: "2px solid #e1e1e1",
        fontWeight: "400",
        color: "#545643",
        fontSize: "10px",
        "&:hover": {
            backgroundColor: '#F1DEDE'
        }
    },
    textCenterAlign: {
        textAlign: 'center'
    },
    tableData: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    borderFull: {
        borderRadius: "50%"
    },
    heading: {
        margin: 0,
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
        fontWeight:"bold",
    },

    // Filter link styles
    filterLink: {
        color: "#fff",
        fontWeight:"bold",
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
    const { count, me } = React.useContext(UserContext)
    const { loading, error: queryError, data } = useQuery(ORDERLIST, {
        variables: { email: me.email,},
    });
    // const { loading, error: queryError, data } = useQuery(ORDERLIST);
    // console.log(me, 'providerRef')



    if (loading) return <Loading />;
    if (queryError) return <ErrorMessage error={queryError} />;
    if (!data) return <p>No treatment plans</p>;

    console.log({data, loading, queryError})
    return <div className="">
        <h3 className={classes.firstHeading2}>ORDER HISTORY</h3>
        {/* <div className={classes.orrangeBox}>
            <p className={classes.addPadd}>Odrder History...</p>
        </div> */}

            {/* start here */}
            <div className=''>
                <div className={classes.table}>
                    <div className={classes.tableHeader}>
                        <div className={classes.headerItem}>Order Id</div>
                        <div className={classes.headerItem}>Order Date</div>
                        <div className={classes.headerItem}>Amount</div>
                        <div className={classes.headerItem}>Email</div>
                    </div>
                    <div className="table-content">
                        {/* <div className={classes.tableRow}>
                            <div className={classes.tableData} style={{fontWeight:"400"}}>Tausif Ahmed</div>
                            <div className={classes.tableData}>2</div>
                            <div className={classes.tableData}>0</div>
                            <div className={classes.tableData}>1</div>
                            <div className={classes.tableData}>5</div>
                        </div>
                        <div className={classes.tableRow}>
                            <div className={classes.tableData}>Dick</div>
                            <div className={classes.tableData}>1</div>
                            <div className={classes.tableData}>1</div>
                            <div className={classes.tableData}>2</div>
                            <div className={classes.tableData}>3</div>
                        </div>
                        <div className={classes.tableRow}>
                            <div className={classes.tableData}>Harry</div>
                            <div className={classes.tableData}>0</div>
                            <div className={classes.tableData}>2</div>
                            <div className={classes.tableData}>2</div>
                            <div className={classes.tableData}>2</div>
                        </div> */}
                        {
                            data?.orderHistoryById?.map(order=> <OrderHisTableRow key={order?.id} order={order} classes={classes} />)
                        }
                        {
                            data?.orderHistoryById?.map(order=> <OrderHisTableRow key={order?.id} order={order} classes={classes} />)
                        }
                        {
                            data?.orderHistoryById?.map(order=> <OrderHisTableRow key={order?.id} order={order} classes={classes} />)
                        }
                        {
                            data?.orderHistoryById?.map(order=> <OrderHisTableRow key={order?.id} order={order} classes={classes} />)
                        }
                        {
                            data?.orderHistoryById?.map(order=> <OrderHisTableRow key={order?.id} order={order} classes={classes} />)
                        }
                        {
                            data?.orderHistoryById?.map(order=> <OrderHisTableRow key={order?.id} order={order} classes={classes} />)
                        }
                        {
                            data?.orderHistoryById?.map(order=> <OrderHisTableRow key={order?.id} order={order} classes={classes} />)
                        }
                        {
                            data?.orderHistoryById?.map(order=> <OrderHisTableRow key={order?.id} order={order} classes={classes} />)
                        }
                        {
                            data?.orderHistoryById?.map(order=> <OrderHisTableRow key={order?.id} order={order} classes={classes} />)
                        }
                    </div>
                </div>
            </div>
        {/* {
                data?.orderHistoryById?.map(order=> <OrderHisTableRow key={order?.id} order={order} classes={classes} />)
                // data?.orders.map(order=> <OrderHisTableRow key={order?.id} orderData={order} classes={classes} />)
            } */}
    </div>
}


export default OrderHistory