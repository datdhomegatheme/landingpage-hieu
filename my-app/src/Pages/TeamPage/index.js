import { dataMembers } from "../../DataItems";

function TeamPage() {
    return (
        <section className="team-page">
            <div className="team-page__container d-flex">
                <h1>Our Team Members</h1>
                <h2 className="text-gray">
                    Following reasons show advantages of adding AppCo to your
                    lead pages, foster market positioning products without demos
                    and checkouts.
                </h2>
                <div className="container__img-member d-flex ">
                    {dataMembers.map((item, index) => (
                        <>
                            <div className="img-bg" key={index}>
                                <img src={item.avatar} alt="avatar member" />
                                <div className="member-detail">
                                    <h1>{item.name}</h1>
                                    <p>{item.job}</p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamPage;
