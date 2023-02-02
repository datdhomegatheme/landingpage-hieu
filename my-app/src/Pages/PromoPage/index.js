import { promoItems } from "../../component/DataItems";
import { Grid } from "@mui/material";

function PromoPage() {
    return (
        <>
            <div className="promo">
                <div className="promo__container d-flex">
                    <div className="promo__title">
                        <h1>Why Peoples Love AppCo?</h1>
                        <h2 className="text-gray">
                            Following reasons show advantages of adding AppCo to
                            your lead pages, demos and checkouts evisculate
                            interoperable imperatives rather.
                        </h2>
                    </div>
                    <Grid container className="promo__content d-flex">
                        {promoItems.map((item) => (
                            <Grid key={item.id} className="content__bg">
                                <div className="bg-icon d-flex">
                                    {item.icon}
                                </div>
                                <h2>{item.title}</h2>
                                <p className="text-gray">{item.content}</p>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </>
    );
}

export default PromoPage;
