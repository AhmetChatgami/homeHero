import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ServiceCard } from "../../components/ServiceCard";
const MyServices = () => {
  const { user } = use(AuthContext);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://home-hero-server-liard.vercel.app/my-services?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return (
      <div>
        <section class="dots-container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default MyServices;
