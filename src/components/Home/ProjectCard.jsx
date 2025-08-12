import { useState, useEffect } from "react";

const ProjectCard = ({ url, title, description, tech }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Skip if no URL is provided
    if (!url) {
      setError(true);
      setLoading(false);
      return;
    }

    const getPreview = async () => {
      try {
        const previewUrl = `https://api.microlink.io/?url=${encodeURIComponent(
          url
        )}&screenshot=true`;
        const response = await fetch(previewUrl);
        const data = await response.json();
        setImageUrl(data.data.screenshot.url);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getPreview();
  }, [url]);

  return (
    <div className="project-card">
      <div className="project-preview-container">
        {loading ? (
          <div className="loading-placeholder text-white">
            Loading preview...
          </div>
        ) : error ? (
          <div className="error-placeholder text-white">
            Preview unavailable
            <br />
            {url && (
              <a
                href={url}
                className="text-darkCeleste hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
            )}
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={`Preview of ${title}`}
            onClick={() => window.open(url, "_blank")}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      <div className="project-info py-1 px-4">
        <h3 className="bg-transparent font-poppins">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-tech">{tech}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
