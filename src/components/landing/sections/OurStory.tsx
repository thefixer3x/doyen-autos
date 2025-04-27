import React, { useRef } from 'react';
import { History, Rocket, ChevronRight } from 'lucide-react';
import { useInView } from '../../../hooks/useInView';
import { Button } from '../../ui/Button';
import { cn } from '../../../utils/cn';

const OurStory: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-navy-900 text-white relative overflow-hidden transition-opacity duration-1000 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-navy-800 rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-800 rounded-full opacity-50 translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={cn(
            "inline-flex items-center justify-center w-20 h-20 rounded-full bg-navy-800 mb-8 transition-all duration-1000",
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-50"
          )}>
            <History className="w-10 h-10 text-accent-500" />
          </div>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-8 transition-all duration-1000 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            The Doyen Mantra
          </h2>
          
          <p className={cn(
            "text-xl text-gray-300 mb-10 leading-relaxed transition-all duration-1000 delay-400",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            At Doyen Autos, we are not just selling cars—we are shaping lifestyles, 
            blending automotive excellence with fashion-forward thinking. Empowered by 
            future forward technology partnerships like Lan-Onasis, Social Entertainment 
            and branding network, we are driving the future of mobility and style in 
            Nigeria and beyond.
          </p>

          <div className={cn(
            "flex items-center justify-center space-x-3 text-2xl font-bold text-accent-500 mb-12 transition-all duration-1000 delay-600",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <Rocket className="w-8 h-8" />
            <span>Don't Snooze, Join the Movement!</span>
          </div>

          <div className={cn(
            "transition-all duration-1000 delay-800",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <Button className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-accent-500/30 inline-flex items-center transition-all duration-300">
              Learn More About Us <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;