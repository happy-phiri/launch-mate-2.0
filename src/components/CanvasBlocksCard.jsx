const CanvasBlocksCard = ({ item }) => {
  return (
    <div
      key={item.label}
      className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-sky-blue/20 rounded-full flex items-center justify-center text-3xl text-blue-green mb-2">
        {<item.icon />}
      </div>
      <h3 className="text-lg font-semibold text-prussian-blue font-montserrat">
        {item.label}
      </h3>
      <p className="text-gray-600 text-base tracking-wide font-quicksand">
        {item.description}
      </p>
    </div>
  );
};

export default CanvasBlocksCard;
