import Services from './Services';
import {skills} from '../../data';



const ServiceList = () => {
  return (
    <div className="container">
      <h1>Our Service</h1>
      <div className="img-container">


            {
                skills.map((item) => {
                    return (
                      
                        <Services key={item.id}  img={item.img} link={item.link} name={item.name} item={item.item} desc={item.desc} />
                    )
                })
            }

      {/* <Services />
      <Services />
      <Services />
      <Services />
      <Services /> */}
      </div>
    </div>
  );
};

export default ServiceList;
