import { use, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);
  // const [refetch, setRefecth] = useState(false)

  useEffect(() => {
    fetch(`https://home-hero-server-liard.vercel.app/providers/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDetails(data.result);
        // console.log(" Api called!")
        console.log(data);
        setLoading(false);
      });
  }, [user, id]); //= [user, id, refetch]

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://home-hero-server-liard.vercel.app/providers/${details._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/all-services");

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been removed.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const handleBookings = () => {
    const bookingInfo = {
      name: details.provider_name,
      price: details.price,
      created_by: details.email,
      description: details.description,
      image_url: details.image_url,
      created_at: new Date(),
      booked_by: user.email,
    };

    fetch(`https://home-hero-server-liard.vercel.app/my-bookings/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookingInfo }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("You Booked Our Service!");
        navigate("/my-bookings");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return (
      <div>
        <section className="dots-container">
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
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={details.image_url}
              alt=""
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {details.provider_name}
            </h1>

            <div className="flex gap-3">
              <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                {details.category}
              </div>

              {/* <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                Saved
              </div> */}
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {details.description}
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Charge: {details.price} USD
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Contact: {details.email}
            </p>

            <div className="flex gap-3 mt-6">
              <Link
                to={`/update-service/${details._id}`}
                className="rounded-full button text-white btn"
              >
                Update Service
              </Link>
              <button
                onClick={handleBookings}
                className="btn button rounded-full"
              >
                Book Now
              </button>
              <button
                onClick={handleDelete}
                className="btn bg-white btn-outline rounded-full border-gray-300 hover:border-blue-500 hover:text-blue-600"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <Link
        to="/all-services"
        className="button rounded-full mt-10 mb-20 p-4 text-white w-full btn-sm"
      >
        Back to Services
      </Link>
    </div>
  );
};

export default Details;
