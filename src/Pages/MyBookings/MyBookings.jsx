import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ServiceCard } from "../../components/ServiceCard";

const MyBookings = () => {
  // const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/my-bookings?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return (
      <div>
        {" "}
        <section className="dots-container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </section>
      </div>
    );
  }
//  console.log(details)
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {details.map((detail) => (
          <ServiceCard key={detail._id} service={detail} />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
