import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Target, Heart, Users, FileText } from 'lucide-react';

const Goals = () => {
  const futureGoals = [
    {
      title: "Youth Tutoring & Mentorship",
      description: "A growing academic outreach program partnering with local schools to empower middle school students in core subjects",
      details: [
        "Provide free after-school tutoring in Mathematics, Science, ELA, and Georgia Studies",
        "Help students build confidence and academic foundation for high school preparation",
        "Expand tutoring sessions across additional middle schools in Forsyth County",
        "Recruit qualified high school volunteers committed to educational excellence",
        "Develop structured learning materials and study guides for students"
      ],
      impact: "Serving 100+ middle school students annually",
      timeline: "Active & Expanding 2025-2026"
    },
    {
      title: "Environmental Stewardship",
      description: "Continuous park and roadside cleanup initiatives to preserve green spaces and public safety",
      details: [
        "Organize regular volunteer cleanups at Fowler Park, Sharon Springs Park, and Caney Creek Preserve",
        "Partner with BioCure and Keep Forsyth County Beautiful for roadside restorations",
        "Remove plastic litter, hazards, and debris to safeguard local wildlife and park visitors",
        "Engage youth volunteers in active environmental conservation"
      ],
      impact: "Targeting 100+ bags of trash collected and 5+ parks restored",
      timeline: "Ongoing Monthly Initiative"
    }
  ];

  const donationPurposes = [
    {
      icon: Users,
      title: "Event Supplies",
      description: "Gloves, trash bags, tools, and equipment for our community service events",
      examples: ["Cleanup supplies", "Safety equipment", "Organizational materials"]
    },
    {
      icon: Heart,
      title: "Community Drives",
      description: "Materials for food drives, clothing donations, and emergency assistance programs",
      examples: ["Food packages", "Hygiene items", "Emergency supplies"]
    },
    {
      icon: FileText,
      title: "Outreach & Education",
      description: "Printing, promotional materials, and educational resources for community programs",
      examples: ["Informational flyers", "Educational materials", "Event promotion"]
    },
    {
      icon: Target,
      title: "Youth Tutoring & Materials",
      description: "Academic workbooks, stationery, and program materials for student support",
      examples: ["Study workbooks", "Learning materials", "Recognition awards"]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">Future Goals & Initiatives</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover our ambitious plans to expand community impact and create lasting positive change
          </p>
          
          <div className="flex justify-center items-center space-x-2 mb-8">
            <Target className="text-primary" size={24} />
            <span className="text-2xl font-semibold text-primary">Building Tomorrow's Community Today</span>
          </div>
        </div>

        {/* Featured Initiatives */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Strategic Initiatives</h2>
          <div className="space-y-8">
            {futureGoals.map((goal, index) => (
              <Card key={index} className="border-primary border-2 bg-muted/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-primary">{goal.title}</CardTitle>
                    <Badge variant="secondary">{goal.timeline}</Badge>
                  </div>
                  <p className="text-lg text-muted-foreground">{goal.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Program Components</h4>
                    <ul className="space-y-2">
                      {goal.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background p-4 rounded-lg">
                      <h5 className="font-semibold text-foreground mb-2">Expected Impact</h5>
                      <p className="text-muted-foreground">{goal.impact}</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <h5 className="font-semibold text-foreground mb-2">Timeline</h5>
                      <p className="text-muted-foreground">{goal.timeline}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Expansion */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Mission Expansion Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Community Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Expand to all Forsyth County districts</li>
                  <li>• Partner with 20+ local organizations</li>
                  <li>• Serve 1,000+ community members annually</li>
                  <li>• Establish satellite volunteer groups</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Program Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Expand middle school tutoring program</li>
                  <li>• Develop youth leadership workshops</li>
                  <li>• Create peer mentorship opportunities</li>
                  <li>• Establish student volunteer awards</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Organizational Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Recruit 100+ active members</li>
                  <li>• Establish advisory board</li>
                  <li>• Develop corporate partnerships</li>
                  <li>• Create volunteer training programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Donation Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Support Our Mission</h2>
          
          {/* Purpose of Donations */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">How Your Donations Help</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {donationPurposes.map((purpose, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                        <purpose.icon className="text-primary" size={24} />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{purpose.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{purpose.description}</p>
                    <div className="space-y-1">
                      {purpose.examples.map((example, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs mr-1">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-muted max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Be Part of Our Future</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Whether through volunteering, donating, or spreading awareness, you can help us 
                achieve these ambitious goals and create lasting positive change in our community.
              </p>
              <div className="space-x-4">
                <a
                  href="https://groupme.com/join_group/104631973/KvkpCg9w"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant="cta">
                    Volunteer With Us
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Goals;