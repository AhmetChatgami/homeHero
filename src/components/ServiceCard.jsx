import { Link } from "react-router";

// // 
// category
// : 
// "Pet Care"
// description
// : 
// "Full wash, haircut, and nail trimming for dogs and cats."
// email
// : 
// "grooming@pawsclaws.com"
// image_url: "https://example.com/images/pet-grooming.jpg"
// price: 75
// provider_name: "Paws & Claws"
// service_name: "Pet Grooming Deluxe"
// _id:"69762dcbef922a1def47809e"
export const ServiceCard = ({service}) => {
  // if(!service) return null;
    const { provider_name, 
image_url, category, description, _id, service_name} = service || {

}
console.log(service)

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-48 overflow-hidden">
        <img
          src={image_url}
          alt={provider_name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{provider_name}</h2>
        <div className="badge text-xs badge-xs badge-secondary rounded-full">{category}</div>
        <div className="text-xs text-secondary">{service_name}</div>
        <p className="line-clamp-1">
            {description}
        </p>
       
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex gap-4 text-sm text-base-content/60">
           
          </div>
          <Link to={`/details/${_id}`} className="btn button rounded-full text-white w-full btn-sm">See Details</Link>
        </div>
      </div>
    </div>
  );
};
