import React, { useState, useEffect } from "react";
import TopHeader from "../../Components/TopHeader";
import "../../Pages/InstaShop/InstaShop.css"

const InstaShop = () => {
  const [media, setMedia] = useState([]);

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
        setMedia(data.data);
      }
    } catch (error) {
      console.error("Error fetching Instagram media:", error);
    }
  };

  return (
    <>
      <TopHeader />
      <div className="page__main-content" id="mainContent">
        <div style={{ marginTop: 20 }}>
          <div className="container">
            <div className="dt-center">
              <h1 className="h2-title dt-mt-0">InstaShop</h1>
              <p className="p-main">
                Browse our Insta feed below and book items directly from any
                one of our posts!
              </p>
            </div>
            <div className="insta-media-container">
              {media.map((item) => (
                <div key={item.id} className="insta-media-item">
                  {item.media_type === "IMAGE" ? (
                    <img
                      src={item.media_url}
                      alt={item.caption}
                      className="insta-media"
                    />
                  ) : (
                    <video controls className="insta-media">
                      <source src={item.media_url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstaShop;
