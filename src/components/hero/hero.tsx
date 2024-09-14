import { heroData } from "@/data/heroData";

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen mx-auto px-4 sm:px-6 lg:px-8 bg-landing bg-center bg-no-repeat bg-fixed bg-cover">
            <h1 className="text-2xl sm:text-3xl font-semibold lg:text-6xl text-center tracking-wide text-white">
                {heroData.title}
                <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text" >
                    {" "}
                    {heroData.highlightedText}
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-300 max-w-4xl" >
                {heroData.description}
            </p>
            <div className="flex justify-center my-10" >
                <a
                    href={heroData.buttonLink}
                    className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md text-white transition-transform duration-300 ease-in-out hover:from-blue-800 hover:to-blue-500"
                >
                    {heroData.buttonText}
                </a>
            </div>

        </div>
    );
};

export default Hero;