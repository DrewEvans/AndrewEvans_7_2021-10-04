import useFetch from "../hooks/useFetch";

import {
  ApartmentDescription,
  ApartmentEquipment,
  ApartmentInfo,
  Carousel,
  NavHeader,
  PageFooter,
} from "../components";
import "../styles/apartment.scss";
import { useParams } from "react-router";

const ApartmentPage = () => {
  const { id } = useParams();
  const { response } = useFetch(`http://localhost:5000/api/appartement/${id}`);
  const apartment = response.data;

  return (
    <>
      <nav>
        <NavHeader />
      </nav>
      {apartment && (
        <div>
          {apartment.map((x) => {
            const {
              title,
              location,
              pictures,
              description,
              host,
              equipments,
              rating,
              tags,
              key,
            } = x;
            return (
              <main className='apart-main'>
                <Carousel pictures={pictures} />
                <ApartmentInfo
                  key={key}
                  title={title}
                  location={location}
                  host={host}
                  rating={rating}
                  tags={tags}
                />
                <div className='dropdown-container'>
                  <ApartmentDescription description={description} />
                  <ApartmentEquipment equipments={equipments} />
                </div>
              </main>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ApartmentPage;
