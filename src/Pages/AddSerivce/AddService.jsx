import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const AddService = () => {
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      provider_name: e.target.name.value,
      price: e.target.price.value,
      category: e.target.category.value,
      description: e.target.description.value,
      image_url: e.target.image_url.value,
      created_at: new Date(),

      email: user.email,
    };
    console.log(formData);


     fetch('http://localhost:3000/providers',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
     })
      .then(res => res.json())
    .then(data=> {
      toast.success("Successfully added!")
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
    // fetch('http://localhost:3000/', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: 
    // })
    // .then(res => res.json())
    // .then(data=> {
    //   toast.success("Successfully added!")
    //   console.log(data)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  };

  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Service</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label className="label font-medium">Price</label>
            <input
              type="text"
              name="price"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder=""
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={""}
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
              <option value="Catering">Catering</option>
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
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="label font-medium">Your Image URL</label>
            <input
              type="url"
              name="image_url"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-blue-500 to-red-600 hover:from-pink-600 hover:to-red-700"
          >
            Provide Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
