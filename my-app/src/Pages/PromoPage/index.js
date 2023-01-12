import { promoItems } from "../../DataItems";

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
                    <div className="promo__content d-flex">
                        {promoItems.map((item, index) => (
                            <>
                                <div key={index} className="content__bg">
                                    <div className="bg-icon d-flex">
                                        {item.icon}
                                    </div>
                                    <h2>{item.title}</h2>
                                    <p className="text-gray">{item.content}</p>
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
