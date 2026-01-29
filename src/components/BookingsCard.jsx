import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router";


export const BookingsCard = ({service}) => {
  // if(!service) return null;
    const { booked_by, created_by,
image_url, category, price, _id, service_name} = service || {

}
// console.log(service)

  return (
    
    <div className="overflow-hidden">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  SL No.
                </th>
                <th>Name</th>
                <th>Contact</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                 
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={service.image_url}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service.booked_by}</div>
                      <div className="text-sm opacity-50">{service.service_name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {service.email}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>${service.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
              </tr>
             
            </tbody>
            {/* foot */}
            
          </table>
        </div>
  );
};
