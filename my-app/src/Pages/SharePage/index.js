import Images from "../../assets/Images";
import { aboutItems } from "../../DataItems";
function SharePage() {
    return (
        <div className="share-page">
            <div className="share-page__container container d-flex">
                <div className="container__left">
                    <img alt="icon mobile" src={Images.iconMobile2} />
                </div>
                <div className="container__right">
                    <h1>Share your Photos with Friends Easily</h1>
                    <p>
                        Objectively deliver professional value with diverse
                        web-readiness. Collaboratively transition wireless
                        customer service without goal-oriented catalysts for
                        change. Collaboratively.
                        <br /> Uniquely simplify sustainable applications
                        whereas adaptive schemas. Competently brand performance
                        based content and
                    </p>
                    <div className="right__content">
                        {aboutItems.map((item, index) => (
                            <>
                                <div key={index} className="about-icon">
                                    <img alt="about icon" src={item.icon} />
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SharePage;
