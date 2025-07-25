import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users } from 'lucide-react';

const Events = () => {
  // Event data - easily updateable structure
  const events = [
  {
    id: 1,
    name: "Fowler Park Cleanup",
    date: "December 15, 2024",
    location: "Fowler Park, Forsyth County",
    summary: "Six members organized a cleanup event at Fowler Park, collecting two full bags of trash from the playground, skatepark, basketball courts, and surrounding areas.",
    images: [
      "./images/forsyth-park-3.png?w=400&h=250&fit=crop"
    ],
    type: "Park Cleanup",
    featured: true
  },
  {
    id: 2,
    name: "The SHOP at CHM Volunteer",
    date: "January 18, 2025",
    location: "429 Canton Rd, Cumming, GA 30040",
    summary: "Eight members volunteered at The SHOP at CHM thrift store, organizing items and performing tasks as directed by staff to support the local community.",
    images: [
      "./images/CHM-1.png?w=400&h=250&fit=crop"
    ],
    type: "Community Support"
  },
  {
    id: 3,
    name: "Major Roadside Cleanup",
    date: "January 25, 2025",
    location: "McFarland Pkwy, Post Rd, Peachtree Pkwy",
    summary: "28 members partnered with BioCure and Keep Forsyth County Beautiful to clean up McFarland Parkway, Post Road, and Peachtree Parkway, restoring cleanliness to three major roads.",
    images: [
      "./images/Major-road-1.jpg?w=400&h=250&fit=crop"
    ],
    type: "Roadside Cleanup"
  },
  {
    id: 4,
    name: "Roadside Cleanup",
    date: "February 17, 2025",
    location: "Bethelview Road, Forsyth County",
    summary: "26 members partnered with BioCure and Keep Forsyth County Beautiful for a large-scale roadside cleanup, targeting both sides of Bethelview Road from 9:30 AM to 12:30 PM.",
    images: [
      "./images/road-1.jpg?w=400&h=250&fit=crop"
    ],
    type: "Roadside Cleanup"
  },
  {
    id: 5,
    name: "Book Donation & Packing",
    date: "March 9, 2025",
    location: "Sharon Forks Public Library",
    summary: "Six members donated and packed books for the public library, bringing a medium-sized box and supplies to assist in packing and donating books to the community.",
    images: [
      "./images/Forsyth-library-cover.jpg?w=400&h=250&fit=crop"
    ],
    type: "Education Support"
  },
  {
    id: 6,
    name: "Formal Clothes Donation",
    date: "March 29, 2025",
    location: "Read it Again Bookstore",
    summary: "Forsyth County AYLUS members set up a table for formal clothes donations, collecting over 3 boxes of business professional/casual clothes for those in need.",
    images: [
      "./images/donation-drive-1.jpg?w=400&h=250&fit=crop"
    ],
    type: "Community Support"
  },
  {
    id: 7,
    name: "Caney Creek Preserve Maintenance",
    date: "April 27, 2025",
    location: "Caney Creek Preserve, Forsyth County",
    summary: "On April 27th, 2025, 4 members performed weed-picking and trash cleaning at Caney Creek Preserve, collecting a large bag of weeds and trash to help maintain the park.",
    images: [
      "./images/caney-1.jpg?w=400&h=250&fit=crop"
    ],
    type: "Park Cleanup"
  },
  {
    id: 8,
    name: "Fowler Park Cleanup",
    date: "May 25, 2025",
    location: "Fowler Park, Forsyth County",
    summary: "On May 25th, 2025, 10 Forsyth County AYLUS members cleaned up Fowler Park, collecting 2 large bags of trash. The park is extremely popular, and removing sharp objects and trash helps keep the public safe.",
    images: [
      "./images/fowler-park-1.jpg?w=400&h=250&fit=crop"
    ],
    type: "Park Cleanup"
  },
  {
    id: 9,
    name: "Sharon Springs Park Cleanup",
    date: "June 22, 2025",
    location: "Sharon Springs Park, Forsyth County",
    summary: "On June 22th, 2025, 3 Forsyth County AYLUS members cleaned up Sharon Springs Park, collecting 2 large bags of trash. Many sports-related objects and plastics were removed to help keep the park safe and clean.",
    images: [
      "./images/sharon-spring.png?w=400&h=250&fit=crop"
    ],
    type: "Park Cleanup",
  }
];

  const getTypeColor = (type: string) => {
    const colors = {
      "Park Cleanup": "bg-green-100 text-green-800",
      "Community Support": "bg-blue-100 text-blue-800",
      "Education Support": "bg-purple-100 text-purple-800",
      "Recreation": "bg-orange-100 text-orange-800",
      "Environmental": "bg-emerald-100 text-emerald-800"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">Events & Impact</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover the amazing community service events organized by AYLUS Forsyth Branch
          </p>
          
          <div className="flex justify-center items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Calendar className="text-primary" size={20} />
              <span className="text-lg font-semibold text-primary">{events.length} Events Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="text-primary" size={20} />
              <span className="text-lg font-semibold text-primary">500+ Community Members Served</span>
            </div>
          </div>
        </div>

        {/* Featured Event */}
        {events.find(event => event.featured) && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Featured Event</h2>
            {(() => {
              const featuredEvent = events.find(event => event.featured)!;
              return (
                <Card className="border-primary border-2 bg-muted/50">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <Badge className={getTypeColor(featuredEvent.type)}>
                            {featuredEvent.type}
                          </Badge>
                          <Badge variant="secondary">Featured</Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">{featuredEvent.name}</h3>
                        <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{featuredEvent.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{featuredEvent.location}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{featuredEvent.summary}</p>
                        <p className="text-sm text-primary font-medium">
                          🌟 Featured on NewsBreak: 
                          <a 
                            href="https://www.newsbreak.com/news/3725888862399-forsyth-county-aylus-members-clean-up-fowler-park-1-in-december-2024"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline ml-1"
                          >
                            Read Article
                          </a>
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {featuredEvent.images.map((image, idx) => (
                          <img
                            key={idx}
                            src={image}
                            alt={`${featuredEvent.name} - Image ${idx + 1}`}
                            className="w-full h-40 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })()}
          </div>
        )}

        {/* All Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden">
              <div className="relative">
                <img
                  src={event.images[0]}
                  alt={event.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-primary text-lg">{event.name}</CardTitle>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={14} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm">{event.summary}</p>
                
                {event.images.length > 1 && (
                  <div className="mt-4 flex space-x-2">
                    {event.images.slice(1).map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`${event.name} - Additional image ${idx + 1}`}
                        className="w-16 h-16 object-cover rounded"
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-muted max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Join Our Next Event</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Want to be part of our next community service initiative? 
                Contact us to learn about upcoming events and volunteer opportunities.
              </p>
              <div className="space-x-4">
                <Badge variant="secondary" className="text-sm">
                  Contact: aylusforsythga@gmail.com
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Events;