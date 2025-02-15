
const CertificationBanner = ({ 
    title = "A1 Certification",
    subtitle = "Lorem Ipsum dolor sit ammet ister ejec",
    backgroundImage,
    className = ""
  }) => {
    return (
      <div 
        className={`w-full rounded-lg relative overflow-hidden ${className}`}
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100px',
          width: '900px',
          borderRadius: '15px'
        }}
      >
        <div className="relative z-10 p-5 bg-black/25 rounded-lg">
          <h1 className="text-3xl font-bold text-white !text-opacity-100">
            {title}
          </h1>
          <p className="text-base text-white !text-opacity-100 mt-1">
            {subtitle}
          </p>
        </div>
      </div>
    );
  };
  
  export default CertificationBanner;
  
