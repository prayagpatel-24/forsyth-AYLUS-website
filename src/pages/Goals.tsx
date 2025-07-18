import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Target, Heart, Users, DollarSign, FileText, Gift, CreditCard } from 'lucide-react';

const Goals = () => {
  const [showPayPalForm, setShowPayPalForm] = useState(false);

  const futureGoals = [
    {
      title: "FieldDay Initiative",
      description: "A comprehensive community engagement program designed to bring sports and recreation to underserved areas",
      details: [
        "Distribute paper bags filled with sporting equipment across Forsyth County parks and large fields",
        "Host organized events with tents, water stations, and supervised recreational activities",
        "Provide access to soccer balls, jump ropes, frisbees, and other sporting materials for children without access",
        "Create community bonding experiences to alleviate increasing mental stress levels",
        "Partner with local sporting goods businesses for sponsorships and equipment donations"
      ],
      impact: "Serving 500+ children and families annually",
      timeline: "Launch planned for Spring 2025"
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
      title: "FieldDay Program",
      description: "Sporting equipment, event setup, and program materials for our signature initiative",
      examples: ["Sports equipment", "Event tents", "Safety supplies"]
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

        {/* Featured Initiative - FieldDay */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Signature Initiative: FieldDay</h2>
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
                  <li>• Launch FieldDay initiative</li>
                  <li>• Develop youth leadership program</li>
                  <li>• Create mentorship opportunities</li>
                  <li>• Establish scholarship fund</li>
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

          {/* Donation Methods */}
          <Card className="bg-muted border-primary border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary flex items-center justify-center space-x-2">
                <DollarSign size={28} />
                <span>Make a Donation</span>
              </CardTitle>
              <p className="text-muted-foreground">
                Your generous support helps us expand our community impact and serve more families in need
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 501(c)(3) Status */}
              <div className="bg-background p-4 rounded-lg border border-border">
                <div className="flex items-center space-x-2 mb-2">
                  <FileText className="text-primary" size={20} />
                  <h4 className="font-semibold text-foreground">Tax-Deductible Donations</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  AYLUS is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible. 
                  IRS Determination letter available upon request.
                </p>
              </div>

              {/* PayPal Donation Section */}
              <div className="text-center space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Donate via PayPal</h4>
                
                {!showPayPalForm ? (
                  <Button 
                    variant="cta" 
                    size="lg"
                    onClick={() => setShowPayPalForm(true)}
                    className="flex items-center space-x-2"
                  >
                    <CreditCard size={20} />
                    <span>Donate Now with PayPal</span>
                  </Button>
                ) : (
                  <div className="bg-background p-6 rounded-lg border border-border">
                    <p className="text-muted-foreground mb-4">
                      PayPal donation form would be embedded here. 
                      Please contact us for direct donation information.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-foreground">Contact for donation setup:</p>
                      <p className="text-sm text-muted-foreground">aylusforsyth@gmail.com</p>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowPayPalForm(false)}
                      className="mt-4"
                    >
                      Back
                    </Button>
                  </div>
                )}

                <p className="text-sm text-muted-foreground">
                  For questions about donations or to request our IRS Determination letter, 
                  please contact us at aylusforsyth@gmail.com
                </p>
              </div>

              {/* Alternative Donation Methods */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-background p-4 rounded-lg border border-border">
                  <h5 className="font-semibold text-foreground mb-2">Other Ways to Help</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sponsor specific events</li>
                    <li>• Donate supplies directly</li>
                    <li>• Corporate sponsorship opportunities</li>
                    <li>• In-kind donations</li>
                  </ul>
                </div>
                
                <div className="bg-background p-4 rounded-lg border border-border">
                  <h5 className="font-semibold text-foreground mb-2">Contact Information</h5>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Email: aylusforsyth@gmail.com</p>
                    <p>President: parthshahofficial@gmail.com</p>
                    <p>Follow us: @aylusforsyth</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
                <Button variant="cta">
                  Volunteer With Us
                </Button>
                <Button variant="outline">
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Goals;