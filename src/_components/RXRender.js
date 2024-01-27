import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    textAlign: {
        textAlign: "center",
        paddingBottom:"20px",
        borderBottom: "2px"
    },
    pTagDifStyle: {
        fontSize: "26px",
        fontWeight: "300",
        color: "#ff9900"
    },
    pLightColorTag:{
        fontSize: "26px",
        fontWeight: "300", 
        color: "#ff0000"
    },
});
const RXRender = () => {
    const classes = useStyles();
    const RXLogoPic = "https://www.victoryselect.com/wp-content/uploads/2023/12/RxLocalLogo.png"
    const APPStoreLogo = "https://www.victoryselect.com/wp-content/uploads/2023/12/DownloadontheAppStore.png"
    const PlayStoreLogo = "https://www.victoryselect.com/wp-content/uploads/2023/12/GetItonGooglePlay.png"
    return (
        <div className={classes.textAlign}>
            <span className={classes.pTagDifStyle}>For Medication Refills Call Victory Pharmacy at <a href="tel:512-279-0985" style={{textDecoration:"none", color:"#ff9900"}}>512-279-0985</a> or <a href="tel:888-264-3661" style={{textDecoration:"none", color:"#ff9900"}}>888-264-3661</a></span>
            <p className={classes.pLightColorTag}>Or Download The RX Local App!</p>
            <a href="https://www.rxlocal.com/">
                <img src={RXLogoPic} alt="RX Logo" width={300} />
            </a>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5rem", paddingTop: "20px" }}>
                <a href="https://apps.apple.com/us/app/rxlocal/id437564871">
                    <img src={APPStoreLogo} alt="Apple Store Logo" width={150} />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.newtechsys.rxlocalmobile&hl=en_US&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1&pli=1">
                    <img src={PlayStoreLogo} alt="Play Store Logo" width={150} />
                </a>
            </div>

        </div>
    )
}

export default RXRender