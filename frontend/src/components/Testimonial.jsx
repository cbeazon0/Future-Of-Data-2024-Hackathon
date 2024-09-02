import TestimonialCard from "./subComponents/TestimonialCard";
import LoganImage from "../assets/Logan.JPG";
import CameranImage from "../assets/Cameran.JPG";
import ConnorImage from "../assets/Connor.JPG";
import AndyImage from "../assets/Andy.JPG";

const Testimonial = () => {
  const testimonials = [
    {
      imageSrc: LoganImage,
      name: "Logan Muhlen",
      title: "Computer Engineering Student",
      testimonial:
        "I love the simplicity of the app. It's easy to use and has all the features I need.",
      linkedInUrl: "https://www.linkedin.com/in/logan-muhlen-54a53b131/",
    },
    {
        imageSrc: CameranImage,
        name: "Cameran Beason",
        title: "Mechanical Engineering Student",
        testimonial:
          "I love the simplicity of the app. It's easy to use and has all the features I need.",
        linkedInUrl: "https://www.linkedin.com/in/cameran-beason/",
      },
      {
        imageSrc: ConnorImage,
        name: "Connor Horn",
        title: "Aerospace Engineering Student",
        testimonial:
          "I love the simplicity of the app. It's easy to use and has all the features I need.",
        linkedInUrl: "https://www.linkedin.com/in/connorhorn/",
      },
      {
        imageSrc: AndyImage,
        name: "Andy Au",
        title: "Cybersecurity Student",
        testimonial:
          "I love the simplicity of the app. It's easy to use and has all the features I need.",
        linkedInUrl: "https://www.linkedin.com/in/andyau107/",
      },
  ];

  return (
    <div id="who-we-are" className="overflow-hidden bg-n-15">
      <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
            Who We Are
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              imageSrc={testimonial.imageSrc}
              name={testimonial.name}
              title={testimonial.title}
              testimonial={testimonial.testimonial}
              linkedInUrl={testimonial.linkedInUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;