import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BookCard from "./books/BookCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];
const TopSellers = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setselectedCategory] = useState("");

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLowerCase()
        );
  return (
    <div className="py-10">
      <h2 className="text-3x1 font-semibold mb-6">Top Sellers</h2>
      {/*Catagory Filtering */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setselectedCategory(e.target.value)}
          name="catagory"
          id="catagory"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((categories, index) => (
            <option key={index} value={categories}>
              {categories}
            </option>
          ))}
        </select>
      </div>
      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 &&
          filteredBooks.map((book, index) => (
            <div>
              <SwiperSlide>
                <BookCard key={index} book={book} />
              </SwiperSlide>
            </div>
          ))}
      </Swiper>
    </div>
  );
};

export default TopSellers;
