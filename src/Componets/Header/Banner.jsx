
const Banner = () => {
    return (
        <div>
            <div className="my-6 relative flex flex-col items-center text-center justify-center px-2 md:px-0">
                <img src= "../../../src/Banner.png" alt="" />
                <div className="absolute text-white space-y-1  md:space-y-4 ">
                    <h1 className=" text-xl md:text-4xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                    <p className="text-xs md:text-sm">
                    Uncover the perfect culinary adventure designed just for you,blending flavors <br /> and techniques in a personalized cooking class like no other
                    </p>
                    <button className="btn w-32 rounded-3xl btn-accent">Explore Now</button>
                    <button className="btn rounded-3xl btn-outline text-white ml-6">Our Feedback</button>   
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center text-center  px-2 md:px-0 my-10 
                ">
                    <h3 className="text-3xl font-bold mb-3"> Our Recipes</h3>
                    <p>Embark on a culinary journey crafted exclusively for your taste buds, exploring gourmet ingredients <br /> and mastering culinary skills with a bespoke cooking experience</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;