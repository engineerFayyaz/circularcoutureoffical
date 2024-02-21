import React, { useState, useEffect } from "react";
import TopHeader from "../../Components/TopHeader";
import "../../Pages/InstaShop/InstaShop.css";

const InstaShop = () => {
  const [media, setMedia] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchInstagramMedia();
  }, []);

  const fetchInstagramMedia = async () => {
    try {
      const accessToken = "IGQWRPUmVfTjNRWFhuZAmlDekxFMGdPVmdlY1hVWU9RQ2huUFRwUzF1SmZAsR2twZA2NLeGptNHhnNk9ZAS1pQdmx4TDlCRWVXTzdud1FqSkRyNEVlTjJMdUZAFVDFiQ0RxQTFJWlZAjaWdJSm9EeDZAKMWd3RkllWEkzd3MZD";
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption&access_token=${accessToken}`
      );
      const data = await response.json();
      if (data.error) {
        console.error("Error fetching Instagram media:", data.error.message);
      } else {
        const sortedMedia = data.data.sort((a, b) => {
          if (a.media_type === "IMAGE") return -1;
          if (b.media_type === "IMAGE") return 1;
          return 0;
        });
        setMedia(sortedMedia);
      }
    } catch (error) {
      console.error("Error fetching Instagram media:", error);
    }
  };

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const getMediaUrl = (item) => {
    if (item.media_type === "VIDEO" && item.thumbnail_url) {
      return item.thumbnail_url;
    }
    return item.media_url;
  };

  return (
    <>
      <TopHeader />
      <div className="page__main-content" id="mainContent">
        <div style={{ marginTop: 20 }}>
          <div className="container">
            <div className="dt-center">
              <h1 className="h2-title dt-mt-0">InstaShop</h1>
            </div>
            <div className="insta-media-container">
              {/* Render images and videos */}
              {media.map((item) => (
                <div key={item.id} className="insta-media-item">
                  {item.media_type === "VIDEO" ? (
                    <video
                      controls
                      className="insta-media"
                      onClick={() => openImage(getMediaUrl(item))}
                    >
                      <source src={getMediaUrl(item)} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={getMediaUrl(item)}
                      alt={item.caption}
                      className="insta-media"
                      onClick={() => openImage(getMediaUrl(item))}
                    />
                  )}
                  {/* Thumbnail icon */}
                  {item.media_type === "IMAGE" && (
                    <div
                      className="thumb-icon"
                      onClick={() => openImage(getMediaUrl(item))}
                    >
                      <i className="fas fa-search-plus"></i>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Zoomed Image */}
      {selectedImage && (
        <div className="zoomed-image-overlay" onClick={closeImage}>
          <div className="zoomed-image-container">
            <button className="close-btn" onClick={closeImage}>
              <i className="fas fa-times"></i>
            </button>
            <img src={selectedImage} alt="Zoomed" className="zoomed-image" />
          </div>
        </div>
      )}
    </>
  );
};

export default InstaShop;
