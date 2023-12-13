import Title from "./Title";

const Educations = () => {
    return (
        <div id="education" className="mb-20">
            <Title heading={'My Educations'} />
            <div className="grid md:grid-cols-2 mt-16 lg:grid-cols-3 gap-10">
                <div className="rounded-lg  shadow-2xl border hover:bg-blue-700 hover:text-white transition-colors">
                    <div className="card-body space-y-4">
                        <h2 className="card-title">B.B.S</h2>
                        <hr className=""/>
                        <p className="text-lg">I'm currently enrolled in my second year of Bachelor of Business Studies at National University in Kushtia. I've been pursuing this degree since 2021.</p>
                    </div>
                </div>
                <div className="rounded-lg  shadow-2xl border-t hover:bg-blue-700 hover:text-white transition-colors">
                    <div className="card-body space-y-4">
                        <h2 className="card-title">H.S.C</h2>
                        <hr/>
                        <p className="text-lg">I successfully completed my HSC education at Peoples College in Kushtia in 2020 under the Jessore board. In the field of Commerce, I achieved a GPA of 3.92 out of 5.</p>
                    </div>
                </div>
                <div className="rounded-lg  shadow-2xl border-t hover:bg-blue-700 hover:text-white transition-colors">
                    <div className="card-body space-y-4">
                        <h2 className="card-title">S.S.C</h2>
                        <hr/>
                        <p className="text-lg">I successfully completed my SSC education at Insaf Nagar High School in 2018 under the Jessore board. In the field of Science, I achieved a GPA of 4.17 out of 5.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Educations;

