import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../component/Loading/Loading";
import ReactImageGallery from "react-image-gallery";
import { cartContext } from "../../Context/Cart.context";
import axios from "axios";

export default function ProductDetails() {
  const [details, setDetails] = useState(null);
  const { addProductToCart } = useContext(cartContext);
  let { id } = useParams();
  console.log(id);
  async function getProductDetails() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );

    console.log(data);
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  const imageItems = details?.images.map((imageURL) => {
    return {
      original: imageURL,
      thumbnail: imageURL,
    };
  });
  return (
    <>
      (
      {details?.images === null ? (
        <Loading />
      ) : (
        <div className="grid grid-col-12 gap-6">
          <div className="col-span-4">
            <ReactImageGallery
              items={details.images}
              showNav={false}
              showFullscreenButton={false}
              showPlayButton={false}
            />
            <h2 className="text-2xl font-bold">{details.title}</h2>
            <h3 className="text-primary">{details.category.name}</h3>
            <p className="mt-3">{details.description}</p>

            <div className="flex justify-between items-center mt-4">
              <span>{details.price}</span>
              <span>
                <i className="fa-solid fa-star text-yellow-400 mr-1">
                  {" "}
                  {details.ratingsAverage}
                </i>
              </span>
            </div>

            <button
              className="btn-primary w-full mt-4"
              onClick={() => {
                addProductToCart({ id: details.id });
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
      );
    </>
  );
}
