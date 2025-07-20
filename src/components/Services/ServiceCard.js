const ServiceCard = ({ image, label, onClick }) => {
  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <div className="w-80 h-80 rounded-2xl border-2 border-[#995023] overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={label}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-4 px-6 py-3 rounded-2xl border-2 border-[#995023] bg-white -translate-y-6 shadow text-center w-80">
        <span className="text-xl font-semibold text-gray-900">{label}</span>
      </div>
    </div>
  );
};

export default ServiceCard; 