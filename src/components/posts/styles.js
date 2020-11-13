import {
    makeStyles
} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    actionDiv: {
        textAlign: "center",
    },
    card: {
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        position: "relative",
    },
    cardActions: {
        display: "flex",
        justifyContent: "space-between",
        padding: "0 16px 8px 16px",

    },
    details: {
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
    },
    mainContainer: {
        alignItems: "center",
        display: "flex",
    },
    media: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
        height: 0,
        paddingTop: "56.25%",
    },
    overlay: {
        color: "white",
        left: "20px",
        position: "absolute",
        top: "20px",
    },
    overlay2: {
        position: "absolute",
        right: "20px",
        top: "20px",
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    title: {
        padding: "0 16px",
    },
}));