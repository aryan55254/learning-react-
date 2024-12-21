const BackgroundChanger = ({ bgColor }) => {
    return (
      <div className={`${bgColor} min-h-screen flex justify-center items-center`}>
        <h1 className="text-white text-4xl">Background Changer App</h1>
      </div>
    );
  };
  
  export default BackgroundChanger;