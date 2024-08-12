import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "../../css/skeletor.css"; // Asegúrate de que la ruta sea correcta

const PetCardSkeleton = () => {
  return (
    <div className="card text-center border-0 shadow-sm mb-4 m-3">
      <div>
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="rounded-circle justify-content-center">
            <Skeleton
              circle={true}
              height={150}
              width={150}
              className="skeleton" // Añade la clase para la animación de shimmer
            />
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <Skeleton width={200} className="skeleton" /> {/* Añade la clase para la animación de shimmer */}
            </h4>
            <p className="card-text">
              <Skeleton width={150} className="skeleton" /> {/* Añade la clase para la animación de shimmer */}
              <br />
              <Skeleton width={150} className="skeleton" /> {/* Añade la clase para la animación de shimmer */}
              <br />
              <Skeleton width={200} className="skeleton" /> {/* Añade la clase para la animación de shimmer */}
              <br />
              <Skeleton width={200} className="skeleton" /> {/* Añade la clase para la animación de shimmer */}
              <br />
              <Skeleton width={250} className="skeleton" /> {/* Añade la clase para la animación de shimmer */}
            </p>
            <Skeleton width={120} height={40} className="skeleton" /> {/* Añade la clase para la animación de shimmer */}
            <Skeleton
              width={120}
              height={40}
              style={{ marginLeft: '10px' }}
              className="skeleton" // Añade la clase para la animación de shimmer
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCardSkeleton;
