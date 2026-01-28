import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateService = () => {
  const data = useLoaderData();
  const service = data?.result || data;
  const navigate = useNavigate();

  // Update form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!service?._id) {
      return toast.error("Something Went Wrong!");
    }
    const formData = {
      name: e.target.name.value,
      category: e.target.category.value,
      description: e.target.description.value,
      image_url: e.target.image_url.value,
    };

    fetch(`http://localhost:3000/providers/${service._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully updated!");
        navigate("/all-services");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Update Service</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Name</label>
            <input
              type="text"
              defaultValue={service?.provider_name}
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={service?.category}
              name="category"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Wellness">Wellness</option>
              <option value="Pet Care">Pet Care</option>
              <option value="Education">Education</option>
              <option value="Beauty">Beauty</option>
              <option value="Photographer">Photographer</option>
              <option value="Tanslator">Translator</option>
              <option value="Catering">Catering</option>
              <option value="Musician">Musician</option>
              <option value="Tech Repair">Tech Repair</option>
              <option value="Home Maintenance">Home Maintenance</option>
              <option value="Automotive">Automotive</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Description Textarea */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              defaultValue={service?.description}
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="label font-medium">Image URL</label>
            <input
              type="url"
              name="image_url"
              defaultValue={service?.image_url}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
