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
        "I'm excited to see how far we can take this app, and how many people we can help. I like the idea of throwing my financial situation at the app and having it provide me with my options.",
      linkedInUrl: "https://www.linkedin.com/in/logan-muhlen-54a53b131/",
    },
    {
        imageSrc: CameranImage,
        name: "Cameran Beason",
        title: "Mechanical Engineering Student",
        testimonial:
          "I love the idea of teaching people about debt payoff strategies, budgeting, and investing.  My wish is for everyone to gain control of their finances and future!",
        linkedInUrl: "https://www.linkedin.com/in/cameran-beason/",
      },
      {
        imageSrc: ConnorImage,
        name: "Connor Horn",
        title: "Aerospace Engineering Student",
        testimonial:
          "I have high hopes for this app and its growth. It's going to be a game changer for people who dont have a strong understanding of their finances.",
        linkedInUrl: "https://www.linkedin.com/in/connorhorn/",
      },
      {
        imageSrc: AndyImage,
        name: "Andy Au",
        title: "Cybersecurity Student",
        testimonial:
          "I love the simplicity of the app. It's easy to use and has all the features I need to not only teach myself, but others on financial literacy and planning.",
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