import PolylineIcon from "@mui/icons-material/Polyline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
function PromoPage() {
    const promoItems = [
        {
            icon: <PolylineIcon />,
            title: "Clean Design",
            content: "Increase sales by showing true dynamics of your website.",
        },
        {
            icon: <LockOutlinedIcon />,
            title: "Secure Data",
            content:
                "Build your online store’s trust using Social Proof & Urgency.",
        },
        {
            icon: <VisibilityOutlinedIcon />,
            title: "Retina Ready",
            content:
                "Realize importance of social proof in customer’s purchase decision.",
        },
    ];
    return (
        <>
            <div className="promo">
                <div className="promo__container d-flex">
                    <div className="promo__title">
                        <h1>Why Peoples Love AppCo?</h1>
                        <h2>
                            Following reasons show advantages of adding AppCo to
                            your lead pages, demos and checkouts evisculate
                            interoperable imperatives rather.
                        </h2>
                    </div>
                    <div className="promo__content d-flex">
                        {promoItems.map((item, index) => (
                            <>
                                <div key={index} className="content__bg">
                                    {item.icon}
                                    <h2>{item.title}</h2>
                                    <p>{item.content}</p>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PromoPage;
