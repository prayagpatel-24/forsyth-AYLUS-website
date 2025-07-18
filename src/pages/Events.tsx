import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users } from 'lucide-react';

const Events = () => {
  // Event data - easily updateable structure
  const events = [
    {
      id: 1,
      name: "Fowler Park Cleanup",
      date: "December 2024",
      location: "Fowler Park, Forsyth County",
      summary: "Our team of dedicated volunteers gathered to clean up Fowler Park, collecting trash and debris to restore the natural beauty of this community space. This event was featured on NewsBreak for its positive community impact.",
      images: [
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=250&fit=crop"
      ],
      type: "Park Cleanup",
      featured: true
    },
    {
      id: 2,
      name: "Local Business Support Drive",
      date: "November 2024",
      location: "Downtown Forsyth",
      summary: "Partnered with local small businesses to provide volunteer support during peak seasons. Our members helped with inventory management, customer service, and promotional activities to boost local economic growth.",
      images: [
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=250&fit=crop"
      ],
      type: "Community Support"
    },
    {
      id: 3,
      name: "Book Donation Campaign",
      date: "October 2024",
      location: "Forsyth County Library",
      summary: "Organized a comprehensive book collection and donation drive, gathering over 500 books for the local library and underprivileged students. The initiative included sorting, cataloging, and distributing books to those in need.",
      images: [
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop"
      ],
      type: "Education Support"
    },
    {
      id: 4,
      name: "Clothing Donation Drive",
      date: "September 2024",
      location: "Community Center",
      summary: "Collected and distributed winter clothing to families in need. Our volunteers sorted donations, organized distribution events, and ensured that warm clothing reached those who needed it most before the cold season.",
      images: [
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&fit=crop"
      ],
      type: "Community Support"
    },
    {
      id: 5,
      name: "Green Meadows Park Restoration",
      date: "August 2024",
      location: "Green Meadows Park",
      summary: "Led a comprehensive park restoration project including trail maintenance, invasive plant removal, and habitat restoration. Collaborated with park services to improve recreational spaces for families and wildlife.",
      images: [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop"
      ],
      type: "Park Cleanup"
    },
    {
      id: 6,
      name: "Senior Center Technology Workshop",
      date: "July 2024",
      location: "Forsyth Senior Center",
      summary: "Provided technology education and support to senior citizens, teaching basic computer skills, smartphone usage, and internet safety. Created lasting connections between youth volunteers and community elders.",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
      ],
      type: "Education Support"
    },
    {
      id: 7,
      name: "Food Bank Volunteer Day",
      date: "June 2024",
      location: "Forsyth County Food Bank",
      summary: "Assisted with food sorting, packaging, and distribution at the local food bank. Our team helped serve over 200 families, ensuring that fresh and non-perishable items reached those experiencing food insecurity.",
      images: [
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=250&fit=crop"
      ],
      type: "Community Support"
    },
    {
      id: 8,
      name: "Youth Chess Tournament",
      date: "May 2024",
      location: "Community Recreation Center",
      summary: "Organized and hosted a chess tournament for local youth, promoting strategic thinking and friendly competition. The event included chess lessons for beginners and prizes for tournament winners.",
      images: [
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=250&fit=crop"
      ],
      type: "Recreation"
    },
    {
      id: 9,
      name: "Earth Day Environmental Fair",
      date: "April 2024",
      location: "Central Park Pavilion",
      summary: "Hosted an educational environmental fair featuring sustainability workshops, recycling drives, and eco-friendly activities. Engaged hundreds of community members in environmental awareness and conservation practices.",
      images: [
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop"
      ],
      type: "Environmental"
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
                  Contact: aylusforsyth@gmail.com
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