import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  HeartHandshake,
  Newspaper,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const carouselImages = [
    {
      url: './images/image-carosel-2.jpeg?w=600&h=400&fit=crop',
      caption: 'Youth Volunteer Environmental Service'
    },
    {
      url: './images/forsyth-park-2.jpg?w=600&h=400&fit=crop',
      caption: 'Park Cleanups & Community Restorations'
    },
    {
      url: './images/image-carosel-1.jpeg?w=600&h=400&fit=crop',
      caption: 'Environmental Park & Trail Cleanups'
    },
    {
      url: './images/Forsyth-book-1.jpg?w=600&h=400&fit=crop',
      caption: 'Book Drives & Educational Support'
    },
    {
      url: './images/forsyth-park-1.png?w=600&h=400&fit=crop',
      caption: 'Fowler Park Environmental Cleanups'
    },
    {
      url: './images/forsyth-thrift-1.png?w=600&h=400&fit=crop',
      caption: 'Community Thrift Store Volunteering'
    },
    {
      url: './images/Card_Event_1.jpg?w=600&h=400&fit=crop',
      caption: 'Cancer Patient Support Card Making'
    },
    {
      url: './images/service-project-2.JPG?w=600&h=400&fit=crop',
      caption: 'Branch Service Planning & Strategy Sessions'
    },
    {
      url: './images/fowler-park-3.jpg?w=600&h=400&fit=crop',
      caption: 'Youth Volunteer Teams in Action'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const missionPillars = [
    {
      icon: Users,
      title: "Youth Leadership",
      description: "Empowering students from over 30 schools to step up, lead projects, and develop essential lifelong leadership skills through real-world service."
    },
    {
      icon: HeartHandshake,
      title: "Community Impact",
      description: "Directly addressing local needs in Forsyth County—from environmental park cleanups and book drives to free student tutoring."
    },
    {
      icon: Sparkles,
      title: "Collaboration & Inclusivity",
      description: "Creating an active, open environment where every member has a voice in brainstorming and executing meaningful community service initiatives."
    },
    {
      icon: CheckCircle2,
      title: "Visible & Lasting Change",
      description: "Ensuring every event produces tangible, measurable benefits for our parks, libraries, schools, and community members."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col space-y-16 py-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              <Sparkles size={14} />
              <span>AYLUS Forsyth Branch • Established 2024</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
              Empowering Youth Through <span className="text-primary">Community Service</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Building a stronger, cleaner, and more supportive Forsyth County through student-led initiatives, park cleanups, academic tutoring, and local outreach.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://groupme.com/join_group/104631973/KvkpCg9w"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button variant="cta" size="lg" className="shadow-md hover:shadow-lg transition-all">
                  Join Our Mission
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </a>
              <Link to="/accomplishments">
                <Button variant="outline" size="lg" className="border-primary/30 text-foreground hover:bg-muted">
                  View Our Accomplishments
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Hero - Image Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-border bg-card">
              <div className="relative h-[360px] md:h-[420px] w-full">
                <img
                  src={carouselImages[currentImage].url}
                  alt={carouselImages[currentImage].caption}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Caption Bar */}
                <div className="absolute bottom-12 left-6 right-6 text-white">
                  <Badge variant="secondary" className="mb-2 bg-white/20 backdrop-blur-md text-white border-0 text-xs">
                    Featured Activity
                  </Badge>
                  <p className="text-base font-semibold drop-shadow-sm">
                    {carouselImages[currentImage].caption}
                  </p>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight size={22} />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${index === currentImage ? 'w-6 bg-white' : 'w-2 bg-white/50'
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Core Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Mission & Values</h2>
          <p className="text-muted-foreground text-lg">
            Empowering youth to lead, serve, and create lasting positive change in Forsyth County and beyond through hands-on service projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {missionPillars.map((pillar, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/80 bg-card">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <pillar.icon size={24} />
                </div>
                <CardTitle className="text-xl text-primary">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Spotlight Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Spotlight 1: NewsBreak Feature */}
          <Card className="border-primary/40 bg-gradient-to-br from-background to-muted/50">
            <CardHeader>
              <div className="flex items-center space-x-2 text-primary mb-1">
                <Newspaper size={20} />
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Media Recognition
                </Badge>
              </div>
              <CardTitle className="text-xl text-foreground">Featured on NewsBreak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our Fowler Park Cleanup project was recognized by NewsBreak, highlighting how youth volunteers in Forsyth County actively restore public spaces and foster environmental safety.
              </p>
              <Button variant="outline" size="sm" asChild className="border-primary/40 text-primary hover:bg-primary hover:text-white">
                <a
                  href="https://www.newsbreak.com/news/3725888862399-forsyth-county-aylus-members-clean-up-fowler-park-1-in-december-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5"
                >
                  Read NewsBreak Article
                  <ArrowRight size={14} />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Spotlight 2: DeSana Tutoring */}
          <Card className="border-primary/40 bg-gradient-to-br from-background to-muted/50">
            <CardHeader>
              <div className="flex items-center space-x-2 text-primary mb-1">
                <BookOpen size={20} />
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Education Support
                </Badge>
              </div>
              <CardTitle className="text-xl text-foreground">DeSana Middle School Tutoring</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Branch members provide ongoing after-school academic tutoring for DeSana Middle School students in Math, Science, ELA, and Georgia Studies to help build student confidence.
              </p>
              <Link to="/events">
                <Button variant="outline" size="sm" className="border-primary/40 text-primary hover:bg-primary hover:text-white inline-flex items-center gap-1.5">
                  Explore Branch Events
                  <ArrowRight size={14} />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <Card className="bg-primary text-primary-foreground text-center p-8 md:p-12 rounded-2xl shadow-lg">
          <CardContent className="space-y-6 max-w-2xl mx-auto p-0">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Make a Real Difference?
            </h2>
            <p className="text-primary-foreground/90 text-base md:text-lg">
              Join 50+ dedicated youth volunteers in Forsyth County. Earn volunteer hours, build leadership skills, and support local community projects.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="https://groupme.com/join_group/104631973/KvkpCg9w"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button variant="secondary" size="lg" className="font-semibold shadow-md">
                  Join Our GroupMe
                </Button>
              </a>
              <Link to="/donate">
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/20">
                  Support Our Chapter
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Home;