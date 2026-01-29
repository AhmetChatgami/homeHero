import { Link, useLoaderData } from "react-router";
import Banner from "../../components/Banner";
import { ServiceCard } from "../../components/ServiceCard";
const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner />

      <div className="text-center text-xl font-bold mt-10">
        Our Latest Services
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mx-auto p-4 mt-10">
        {data.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      
        <Link to="/all-services" className="button rounded-full mt-10 mb-20 p-4 text-white w-full btn-sm">
          Explore More Services
        </Link>
    
    </div>
  );
};

export default Home;
