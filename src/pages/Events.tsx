import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users } from 'lucide-react';
import events from '../data/events';

const Events = () => {
  const getTypeColor = (type: string) => {
    const colors = {
      "Park Cleanup": "bg-green-100 text-green-800",
      "Community Support": "bg-blue-100 text-blue-800",
      "Education Support": "bg-purple-100 text-purple-800",
      "Recreation": "bg-orange-100 text-orange-800",
      "Environmental": "bg-emerald-100 text-emerald-800",
      "Card Making": "bg-blue-100 text-blue-800"
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
