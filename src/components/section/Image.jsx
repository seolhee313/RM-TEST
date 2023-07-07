import React, { useEffect, useState } from 'react';

const Image = () => {
  const [imageURLs, setImageURLs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=sea&client_id=Z_tjioEc226tuq445cyzydcEhf22Ej-cGt8GA5TaUyE&per_page=12`,
        );
        const data = await response.json();
        const urls = data.results.map(photo => photo.urls.regular);
        setImageURLs(urls);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === imageURLs.length - 1 ? 0 : prevIndex + 1,
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [imageURLs]);

  return (
    <section id="section4">
      <div className="section__inner">
        <div className="box1">
          <div className="box1-1">
            <div>
              <div
                style={{
                  backgroundImage: `url(${
                    imageURLs[(currentIndex + 0) % imageURLs.length]
                  })`,
                }}
              ></div>
              <div
                style={{
                  backgroundImage: `url(${
                    imageURLs[(currentIndex + 1) % imageURLs.length]
                  })`,
                }}
              ></div>
            </div>
            <div
              style={{
                backgroundImage: `url(${
                  imageURLs[(currentIndex + 2) % imageURLs.length]
                })`,
              }}
            ></div>
          </div>
          <div className="box1-2">
            <div
              style={{
                backgroundImage: `url(${
                  imageURLs[(currentIndex + 3) % imageURLs.length]
                })`,
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${
                  imageURLs[(currentIndex + 4) % imageURLs.length]
                })`,
              }}
            ></div>
          </div>
        </div>
        <div className="box2">
          <div
            style={{
              backgroundImage: `url(${
                imageURLs[(currentIndex + 5) % imageURLs.length]
              })`,
            }}
          ></div>
          <div
            style={{
              backgroundImage: `url(${
                imageURLs[(currentIndex + 6) % imageURLs.length]
              })`,
            }}
          ></div>
        </div>
        <div className="box3">
          <div
            className="green"
            style={{
              backgroundImage: `url(${
                imageURLs[(currentIndex + 7) % imageURLs.length]
              })`,
            }}
          ></div>
          <div
            className="red"
            style={{
              backgroundImage: `url(${
                imageURLs[(currentIndex + 8) % imageURLs.length]
              })`,
            }}
          ></div>
          <div
            className="white"
            style={{
              backgroundImage: `url(${
                imageURLs[(currentIndex + 9) % imageURLs.length]
              })`,
            }}
          ></div>
          <div
            className="gray"
            style={{
              backgroundImage: `url(${
                imageURLs[(currentIndex + 10) % imageURLs.length]
              })`,
            }}
          ></div>
          <div
            className="blue"
            style={{
              backgroundImage: `url(${
                imageURLs[(currentIndex + 11) % imageURLs.length]
              })`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Image;
