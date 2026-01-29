import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ServiceCard } from "../../components/ServiceCard";
import { BookingsCard } from "../../components/BookingsCard";

const MyBookings = () => {
  // const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`https://home-hero-server-liard.vercel.app/my-bookings?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
        "Content-Type": "application/json",
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
      <div className="">
        {/* <p>{details.length} bookings found</p> */}
         <div className="overflow-hidden">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>

        </table>
        {details.map((detail, index) => (
          <BookingsCard key={detail._id} service={detail} index={index + 1} />
          
        ))}
      </div>
        
             </div>
    </div>
  );
};

export default MyBookings;
