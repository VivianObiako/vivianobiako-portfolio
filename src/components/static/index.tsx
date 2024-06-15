import Navigation from "./Navigation";
import Footer from "components/shared/Footer";
import PersonalInformation from "./PersonalInformation";

const Static = () => {
    return (
        <div className='static-section h-fit md:h-screen focus-visible:outline-none relative md:fixed md:top-0 md:left-0 w-full md:w-1/2 md:overflow-y-hidden flex flex-col justify-between px-5 sm:px-10 py-24 lg:py-[80px] lg:pl-[90px] md:pr-20 lg:pr-24'>
            <PersonalInformation />
            <Navigation />
            <Footer />
        </div>
    );
};

export default Static;
