import React from "react";
import { firestore } from "../../firebase.js";
import GeneralText from "../../Components/GeneralText/GeneralText";
import PropertyCard from "../../Components/PropertyCard/PropertyCard";
import MoreInfo from "../../Components/MoreInfo/MoreInfo";
import ContactForm from "../../Components/ContactForm/ContactForm";
import heroImage from "../../assets/images/hero_featured.png";
import placeholderImage from "../../assets/images/placeholder_listing.png";
import "./FeaturedListing.scss";

function FeaturedListing() {
  const [onListings, setOnListings] = React.useState([]);
  const [flListings, setFlListings] = React.useState([]);

  React.useEffect(() => {
    getFeaturedListings();
  }, []);

  const getFeaturedListings = () => {
    firestore
      .collection("featuredproperty")
      .get()
      .then((res) => {
        let ontarioListings = [];
        let floridaListings = [];
        res.docs.forEach((property) => {
          if (property.data().province === "ON") {
            ontarioListings.push(property.data());
          } else {
            floridaListings.push(property.data());
          }
        });
        setOnListings(ontarioListings);
        setFlListings(floridaListings);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderListingCards = (province) => {
    let renderedCards = [];
    if (province === "ON") {
      renderedCards = onListings.map((listing) => {
        let propertyPrice = listing.price
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return (
          <PropertyCard
            page="featured"
            image={listing.thumbnail}
            title={listing.address}
            text={propertyPrice}
            link={listing.id}
            beds={listing.beds}
            baths={listing.baths}
            sqfeet={listing.sqfeet}
            built={listing.built}
            city={listing.city}
          />
        );
      });
    } else {
      renderedCards = flListings.map((listing) => {
        let propertyPrice = listing.price
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return (
          <PropertyCard
            page="featured"
            image={listing.thumbnail}
            title={listing.address}
            text={propertyPrice}
            link={listing.id}
            beds={listing.beds}
            baths={listing.baths}
            sqfeet={listing.sqfeet}
            built={listing.built}
            city={listing.city}
          />
        );
      });
    }
    return renderedCards;
  };

  return (
    <>
      <section className="heroFeature">
        <img className="heroFeature__image" src={heroImage} alt="" />
      </section>
      <GeneralText
        title="Our featured listings"
        text="List your properties with us, and we’ll help you sell your home in no time, as easy as possible."
        buttons={{
          buttonOne: {
            text: "ONTARIO LISTINGS",
            link: "",
          },
          buttonTwo: {
            text: "FLORIDA LISTINGS",
            link: "",
          },
        }}
      />
      <section className="featured">
        <h3 className="featured__title">Ontario</h3>
        <nav className="featured__list">{renderListingCards("ON")}</nav>
      </section>
      {/* <MoreInfo /> */}
      <ContactForm />
      {/* <section className='featured'>
        <h3 className='featured__title'>Florida</h3>
        <nav className='featured__list'>
          {renderListingCards('FL')}
        </nav>
      </section> */}
    </>
  );
}

export default FeaturedListing;
