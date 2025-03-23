export const MarqueImg = ({ img }: { img: string }) => {
    return (
      <img
        src={img}
        className="w-44 h-44 xl:w-50 xl:h-50 object-scale-down mx-1 xl:mx-8"
        alt=""
      />
    );
  };