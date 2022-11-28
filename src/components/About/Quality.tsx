import QualityCard, { QualityCProps } from "./QualityCard";
import { TriangleProps } from "./Triangle";

const Quality = () => {
  const qualityCards: QualityCProps[] = [
    {
      imgSrc: "/server-assets/women.jpeg",
      heading: "Our solution",
      id: 0,
      description:
        "Wearing proper walking shoes is a fundamental element in maintaining the correct walking technique, as well as preventing injury. ",
      triangles: [
        {
          position: { bottom: -1, left: 0 },
          id: 0,
          rotation: "228",
        },
        {
          position: { bottom: -1, right: 16.5 },
          id: 3,
          rotation: "228",
        },
        {
          position: { bottom: 0, right: 17.5 },
          id: 3,
          rotation: "228",
        },
      ],
    },
    {
      imgSrc: "/server-assets/women3.jpeg",
      heading: "Process",
      id: 1,
      description:
        "Wearing proper walking shoes is a fundamental element in maintaining the correct walking technique, as well as preventing injury. ",
      triangles: [
        {
          position: { bottom: -2, right: 1 },
          id: 0,
          rotation: "45",
        },
        {
          position: { bottom: -2, right: 3 },
          id: 1,
          rotation: "45",
        },
        {
          position: { bottom: -0.75, right: 0 },
          id: 3,
          rotation: "45",
        },
        {
          position: { bottom: 0.75, right: 0.75 },
          id: 2,
          rotation: "45",
        },
      ],
    },
    {
      imgSrc: "/server-assets/women2.jpeg",
      heading: "Results",
      id: 2,
      description:
        "Wearing proper walking shoes is a fundamental element in maintaining the correct walking technique, as well as preventing injury. ",
      triangles: [
        {
          position: { bottom: -1, left: 0 },
          id: 0,
          rotation: "228",
        },
        {
          position: { bottom: -1, right: 16.5 },
          id: 3,
          rotation: "228",
        },
        {
          position: { bottom: 0, right: 17.5 },
          id: 3,
          rotation: "228",
        },
      ],
    },
  ];

  return (
    <div className="w-full h-fit flex flex-col bg-white py-[3rem]">
      <div className="flex flex-wrap gap-6 px-6 md:flex-col md:items-center md:px-0 mb-8">
        <span className="text-3xl font-black pr-[2rem] md:pr-0 md:text-4xl lg:text-5xl ">
          Making high quality products
        </span>
        <p className="text-gray-700 text-sm font-medium md:text-center md:text-lg md:px-[4rem] lg:px-[10rem] miniLarge:px-[15rem] xl:px-[20rem] 2xl:px-[30rem] ">
          For explosive events (sprints up to 400 metres, long jump, triple
          jump) the reduction in atmospheric pressure means there is less
          resistance from the atmosphere.
        </p>
      </div>
      <div className="flex flex-col gap-[.5rem]">
        {qualityCards.map((qualityCard) => {
          const { imgSrc, heading, description, triangles, id } = qualityCard;
          return (
            <QualityCard
              key={id}
              id={id}
              imgSrc={imgSrc}
              heading={heading}
              description={description}
              triangles={triangles}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Quality;
