import { useState } from 'react';
import { Mail, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { toast } = useToast();

  // Placeholder images for the carousel
  const carouselImages = [
    './images/forsyth-park-2.jpg?w=600&h=400&fit=crop',
    './images/Forsyth-book-1.jpg?w=600&h=400&fit=crop',
    './images/forsyth-park-1.png?w=600&h=400&fit=crop',
    './images/forsyth-thrift-1.png?w=600&h=400&fit=crop',
    "./images/Card_Event_1.jpg?w=600&h=400&fit=crop"
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would integrate with EmailJS or your preferred email service
    // For now, we'll show a success message
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-muted flex flex-col">
      {/* Hero Section */}
      <section className="py-16 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  AYLUS Forsyth Branch
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Building stronger communities through youth-led service initiatives since 2024.
                </p>
                <a
                  href="https://groupme.com/join_group/104631973/KvkpCg9w"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant="cta" size="lg">
                    Join Our Mission
                  </Button>
                </a>
              </div>

              {/* Mission Statement */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-lg font-semibold text-foreground">
                      Empowering youth to lead, serve, and create lasting change in Forsyth County and beyond.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-2">
                      <li>
                        <span className="font-medium text-foreground">Youth Leadership:</span> We provide opportunities for students from over 30 schools to develop leadership skills through hands-on service.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Community Impact:</span> Our projects address major local needs, from environmental cleanups to healthcare and creative fundraising.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Collaboration:</span> We use social media to recruit, communicate, and encourage member input, ensuring everyone has a voice.
                      </li>
                      <li>
                        <span className="font-medium text-foreground">Visible Change:</span> Every initiative is designed to make a real, positive difference in our community.
                      </li>
                    </ul>
                    <p className="text-md text-muted-foreground">
                      Join us as we build a stronger, more connected Forsyth County—one project at a time.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Chapter Story moved to About Us page */}
            </div>

            {/* Right Content - Image Carousel */}
            <div className="relative mt-64">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={carouselImages[currentImage]}
                  alt="AYLUS Activities"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Carousel Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImage ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;