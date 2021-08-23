import Image from 'next/image';

const MediumCard = ({ img, title }) => {
  return (
    <div
      className="cursor-pointer hover:scale-105
      transition transform duration-300 "
    >
      <div className="relative h-80 w-80 ">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h1 className="text-2xl mt-3 ">{title}</h1>
    </div>
  );
};

export default MediumCard;
