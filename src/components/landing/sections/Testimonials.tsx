import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
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
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their experience with Doyen Autos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                <Quote className="h-8 w-8 text-accent-500/20" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 italic">
                  "{testimonial.quote}"
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">
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
          <a
            href="/reviews"
            className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700"
          >
            Read More Customer Stories
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;