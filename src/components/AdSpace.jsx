import React, { useState, useEffect } from "react";
import { API_URL } from "../constants";

const AdSpace = () => {
  const [adData, setAdData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    fetchAds();
  }, []);

  // Auto-rotate ads every 5 seconds
  useEffect(() => {
    if (adData?.ethiogamesad && adData.ethiogamesad.length > 1) {
      const interval = setInterval(() => {
        setCurrentAdIndex(
          (prevIndex) => (prevIndex + 1) % adData.ethiogamesad.length
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [adData]);

  const fetchAds = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_URL}/ads`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success && data.ads) {
        setAdData(data.ads);
      }
    } catch (err) {
      console.error("Error fetching ads:", err);
      setError("Failed to load advertisement");
    } finally {
      setLoading(false);
    }
  };

  const renderAdContent = () => {
    if (loading) {
      return (
        <div className="animate-pulse bg-gray-200 rounded-lg h-24 flex items-center justify-center">
          <div className="text-gray-500 text-sm">Loading...</div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <div className="text-red-600 text-sm">{error}</div>
        </div>
      );
    }

    // Check if ethiogames ads exist and have URLs
    if (adData?.ethiogamesad && adData.ethiogamesad.length > 0) {
      const currentAd = adData.ethiogamesad[currentAdIndex];
      const totalAds = adData.ethiogamesad.length;

      return (
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={currentAd.url}
            alt="Advertisement"
            className="w-full h-24 object-cover cursor-pointer hover:opacity-95 transition-opacity duration-300"
            onClick={() => {
              // Optional: Add click tracking or redirect logic here
              console.log("Ad clicked:", currentAd);
            }}
            onError={(e) => {
              console.error("Failed to load ad image");
              e.target.style.display = "none";
              setError("Failed to load advertisement image");
            }}
          />

          {/* Ad indicators if multiple ads */}
          {totalAds > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {adData.ethiogamesad.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAdIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentAdIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Ad counter */}
          {/* {totalAds > 1 && (
            <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
              {currentAdIndex + 1}/{totalAds}
            </div>
          )} */}
        </div>
      );
    }

    // Fallback placeholder when no ad is available
    return (
      <div className="bg-white rounded-lg p-4 text-center shadow-lg border-2 border-dashed border-gray-300">
        <div className="text-gray-800 text-base font-semibold mb-1">
          የማስታወቂያ ቦታ
        </div>
        <div className="text-gray-500 text-xs">320x100px</div>
      </div>
    );
  };

  return <div className="mx-4 mb-4">{renderAdContent()}</div>;
};

export default AdSpace;
