import Images from "../../assets/Images";

const TrustPage = () => {
  return (
    <section className={"trust-page d-flex"}>
      <div className={"trust-page__container"}>
        <h1>Trusted by Companies</h1>
        <h2 className={"trust-page__container__content text-gray"}>
          Rapidiously morph transparent internal or "organic" sources whereas
          resource sucking e-<br/>business. Conveniently innovate compelling
          internal.
        </h2>
          <div className={"trust-page__container__carousel"}>
              <div className={"carousel__parent"}>
                  <div className={"carousel__parent__stage-outer"}>
                      <div className={"carousel__parent__stage-main"}>
                        <div className={"stage-main__item"}>
                            <img className={"item__img"} src={Images.airBnb} alt={"airBnb logo"} />
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};
export default TrustPage;
