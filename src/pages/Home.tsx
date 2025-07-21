import { useState } from 'react';
import { Mail, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  // Placeholder images for the carousel
  const carouselImages = [
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop',
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
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-16">
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
                <Button variant="cta" size="lg">
                  Join Our Mission
                </Button>
              </div>

              {/* Mission Statement */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The Forsyth County AYLUS Branch, founded in 2024, aims to foster 
                    community service and support those in need throughout northeast 
                    Atlanta through youth leadership. The greater Atlanta area, specifically 
                    Forsyth County, has many motivated students who actively search for 
                    volunteering opportunities and ways to give back to the community. 
                    With over 30 schools in the county school district, numerous students 
                    would gain experience from AYLUS and could contribute to a larger 
                    goal. Specifically, our team of leaders is very motivated to create 
                    change by producing a tangible impact – not just in our county – but 
                    throughout Atlanta. This branch will create unique volunteering 
                    opportunities, making volunteering much more than just another 
                    commitment. The plan to recruit members is to use social media 
                    on multiple platforms to reach out to many students – getting them 
                    involved in the chapter’s endeavors. Social media will be the 
                    primary way to communicate with volunteers, and we will regularly 
                    post activities and opportunities with interactive aspects to 
                    receive ideas. Our vision is to target major fields one at a time. 
                    For example, we would set a goal for an environmental goal 
                    (ex., collecting 500 pounds of trash from local parks), and once 
                    that is reached, we would move to a healthcare task (ex., putting 
                    together and constructing 50 first aid dispensers in public areas). 
                    Many such events will target fundraising creatively, such as 
                    running events where we donate to a good cause and support the 
                    chapter financially. We hope to create a visible impact on the 
                    community around us through youth leadership, and a wonderful 
                    organization like AYLUS is perfect!
                  </p>
                </CardContent>
              </Card>

              {/* Chapter Story */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Our Story</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Established in 2024, AYLUS Forsyth Branch represents the newest chapter 
                    in a growing movement of youth-led community service. Our branch has 
                    quickly grown to over 50 dedicated members committed to making a difference.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Content - Image Carousel */}
            <div className="relative">
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

      {/* Leadership Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the dedicated leaders driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* President */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">PS</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Parth Shah</h3>
                <p className="text-primary font-medium">President</p>
              </CardContent>
            </Card>

            {/* Vice President */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">SA</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Sakeeth Alla</h3>
                <p className="text-primary font-medium">Vice President</p>
              </CardContent>
            </Card>

            {/* Secretary */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">PP</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Prayag Patel</h3>
                <p className="text-primary font-medium">Secretary</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* National AYLUS Values */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary">National AYLUS Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground text-lg">
                [National AYLUS Values Placeholder] - Values content will be added later.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Contact Us</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary" size={20} />
                    <div>
                      <p className="font-medium">Chapter Email</p>
                      <p className="text-muted-foreground">aylusforsyth@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary" size={20} />
                    <div>
                      <p className="font-medium">President</p>
                      <p className="text-muted-foreground">parthshahofficial@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Instagram className="text-primary" size={20} />
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p className="text-muted-foreground">@aylusforsyth</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button type="submit" variant="cta" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;