import React, { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { useInView } from '../../../hooks/useInView';
import { cn } from '../../../utils/cn';
import { Button } from '../../ui/Button';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const testimonials = [
    {
      quote: "The financing team at Doyen Autos made my dream of owning a luxury car a reality. Their rates were competitive and the process was seamless.",
      author: "Emeka Nduka",
      role: "Purchased a Mercedes-Benz C300",
      rating: 5
    },
    {
      quote: "Their commitment to electric vehicles and sustainable mobility shows they're thinking about the future. The test drive experience was exceptional.",
      author: "Chinwe Okafor",
      role: "Purchased a Tesla Model 3",
      rating: 5
    },
    {
      quote: "From the initial consultation to final delivery, Doyen Autos provided outstanding service. Their after-sales support is equally impressive.",
      author: "Ade Johnson",
      role: "Purchased a BMW X5",
      rating: 4
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-white relative overflow-hidden transition-opacity duration-1000 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            What Our Customers Say
            <span className="absolute left-1/4 right-1/4 bottom-0 h-1 bg-accent-500 rounded-full"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Don't just take our word for it. Here's what our valued customers have to say about their experience with Doyen Autos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <Quote className="h-12 w-12 text-accent-300" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-5 w-5",
                        i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                      )}
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-lg italic">
                  "{testimonial.quote}"
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="mt-6 border-accent-500 text-accent-600 hover:bg-accent-50"
          >
            Read More Customer Stories
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;