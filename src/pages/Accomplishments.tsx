import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Users, Calendar, Newspaper, Target, Clock, Trash, BookOpen } from 'lucide-react';

const Accomplishments = () => {
  // Statistics data - easily updateable
  const stats = [
    {
      icon: Users,
      label: "Members Recruited",
      value: "50+",
      description: "Active volunteers in our growing community"
    },
    {
      icon: Calendar,
      label: "Successful Events",
      value: "9",
      description: "Community service initiatives completed"
    },
    {
      icon: Clock,
      label: "Volunteer Hours",
      value: "500+",
      description: "Hours of dedicated community service"
    },
    {
      icon: Trash,
      label: "Bags of Trash Cleaned",
      value: "150+",
      description: "Environmental impact through park cleanups"
    },
    {
      icon: BookOpen,
      label: "Books Donated",
      value: "500+",
      description: "Educational resources provided to community"
    },
    {
      icon: Target,
      label: "Families Served",
      value: "200+",
      description: "Direct community impact through various initiatives"
    }
  ];

  const keyAccomplishments = [
    {
      title: "NewsBreak Feature Article",
      description: "Featured on NewsBreak for our Fowler Park Cleanup initiative, highlighting our positive community impact",
      link: "https://www.newsbreak.com/news/3725888862399-forsyth-county-aylus-members-clean-up-fowler-park-1-in-december-2024",
      badge: "Media Recognition"
    },
    {
      title: "Rapid Growth Achievement",
      description: "Successfully recruited 50+ dedicated members within our first year of operation",
      badge: "Growth Milestone"
    },
    {
      title: "Community Partnership Success",
      description: "Established strong partnerships with local businesses, parks, and community organizations",
      badge: "Partnership"
    },
    {
      title: "Environmental Impact",
      description: "Significantly improved local park conditions through organized cleanup efforts",
      badge: "Environmental"
    },
    {
      title: "Educational Support",
      description: "Provided technology education to seniors and book donations to students",
      badge: "Education"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">Our Accomplishments</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Celebrating the positive impact we've made in Forsyth County since our establishment in 2024
          </p>
          
          <div className="flex justify-center items-center space-x-2 mb-8">
            <Trophy className="text-primary" size={24} />
            <span className="text-2xl font-semibold text-primary">Making a Difference Together</span>
          </div>
        </div>

        {/* Key Accomplishments */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Key Achievements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {keyAccomplishments.map((accomplishment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-primary text-lg">{accomplishment.title}</CardTitle>
                    <Badge variant="secondary">{accomplishment.badge}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{accomplishment.description}</p>
                  {accomplishment.link && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={accomplishment.link} target="_blank" rel="noopener noreferrer">
                        Read Article
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Impact by the Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                      <stat.icon className="text-primary" size={24} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h4>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Recognition */}
        <div className="mb-16">
          <Card className="bg-muted border-primary border-2">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Newspaper className="text-primary" size={32} />
              </div>
              <CardTitle className="text-2xl text-primary">Media Recognition</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Featured on NewsBreak: Fowler Park Cleanup Article
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our dedication to environmental conservation and community service was recognized 
                by NewsBreak, highlighting our successful Fowler Park cleanup initiative and 
                the positive impact our volunteers are making in Forsyth County.
              </p>
              <Button variant="cta" asChild>
                <a 
                  href="https://www.newsbreak.com/news/3725888862399-forsyth-county-aylus-members-clean-up-fowler-park-1-in-december-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Full Article
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Environmental Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Parks Cleaned</span>
                <span className="font-semibold">3 Major Parks</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Trash Bags Collected</span>
                <span className="font-semibold">150+ Bags</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Trees Planted</span>
                <span className="font-semibold">25 Saplings</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Trail Miles Maintained</span>
                <span className="font-semibold">5+ Miles</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Community Engagement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Families Helped</span>
                <span className="font-semibold">200+ Families</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Seniors Assisted</span>
                <span className="font-semibold">50+ Seniors</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Educational Workshops</span>
                <span className="font-semibold">8 Sessions</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Community Partners</span>
                <span className="font-semibold">12 Organizations</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-muted max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Join Our Success Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                These accomplishments are just the beginning. Help us continue making a positive 
                impact in our community by joining AYLUS Forsyth Branch today.
              </p>
              <div className="space-x-4">
                <Button variant="cta">
                  Get Involved
                </Button>
                <Button variant="outline">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Accomplishments;