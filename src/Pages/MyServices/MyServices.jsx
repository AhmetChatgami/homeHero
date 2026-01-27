import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ServiceCard } from "../../components/ServiceCard";
const MyServices = () => {
    const {user} = use(AuthContext)
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {

        fetch(`http://localhost:3000/services_name?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(res=> res.json())
        .then(data=> {
            
            setServices(data)
            setLoading(false)
        })

    }, [user])


    if(loading) {
        return <div> Please wait ... Loading...</div>
    }

    return (
        <div>
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
                     {services.map(service => <ServiceCard key={service._id} service={service}/>)}
                  </div>
            
        </div>
    );
};

export default MyServices;