const Banner = () => {
    return (
        <div className="relative">
  
            <img className="hidden  lg:block h-[100vh] w-full object-cover" src={'https://i.ibb.co/pf1VBDx/New-Project.png'} alt="" />
<div className="w-full h-[100vh] absolute top-0 left-0 lg:bg-[#00000080] bg-blend-overlay">

</div>

            <img className="lg:hidden w-full object-cover opacity-65" src={'https://i.ibb.co/Y7yhTYb/Blue-Modern-Smartphone-Sale-Instagram-Post.png'} alt="" />

   
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
         <button className=" btn btn-secondary text-white font-bold">
                Let’s Explore
            </button>
         </div>
        </div>
    );
};

export default Banner;
